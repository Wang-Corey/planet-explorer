import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { createRng } from '../core/rng.js';
import { generateDiscoveryName, generatePlanetName } from './types.js';
import { buildPropGeometry, propGlows } from './props.js';
import { Creature } from './creatures.js';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const _groundRay = new THREE.Ray();
const CREATURE_UPDATE_RANGE = 400;

const TERRAIN_DETAIL = 5;
const LIQUID_DETAIL = 4;
const COLLECTIBLES_PER_PLANET = 8;

let haloTexture = null;

function getHaloTexture() {
  if (haloTexture) return haloTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.25)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  haloTexture = new THREE.CanvasTexture(canvas);
  return haloTexture;
}

const ATMOSPHERE_SHADER = {
  vertexShader: /* glsl */ `
    varying float vIntensity;
    void main() {
      vec3 viewNormal = normalize(normalMatrix * normal);
      vIntensity = pow(0.72 - dot(viewNormal, vec3(0.0, 0.0, 1.0)), 2.5);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 glowColor;
    varying float vIntensity;
    void main() {
      gl_FragColor = vec4(glowColor, 1.0) * vIntensity;
    }
  `,
};

const COLLECTIBLE_SHAPES = {
  shard: () => new THREE.TetrahedronGeometry(0.55, 0).scale(1, 1.6, 1),
  pearl: () => new THREE.SphereGeometry(0.45, 10, 8),
  orb: () => new THREE.IcosahedronGeometry(0.5, 1),
  star: () => new THREE.OctahedronGeometry(0.55, 0),
  gem: () => new THREE.OctahedronGeometry(0.45, 0).scale(1, 1.5, 1),
  seed: () => new THREE.ConeGeometry(0.35, 0.9, 6),
  cube: () => new THREE.BoxGeometry(0.6, 0.6, 0.6),
};

function shapeElevation(shape, raw, noise3D, direction, frequency) {
  switch (shape) {
    case 'ridged': {
      let sum = 0;
      let amplitude = 0.6;
      let freq = frequency;
      for (let octave = 0; octave < 4; octave++) {
        const n = 1 - Math.abs(noise3D(direction.x * freq, direction.y * freq, direction.z * freq));
        sum += n * n * amplitude;
        amplitude *= 0.5;
        freq *= 2.1;
      }
      return Math.min(1, sum * 0.9);
    }
    case 'dunes':
      return 0.35 + 0.32 * Math.abs(Math.sin(raw * 4.0)) + raw * 0.18;
    case 'terraced': {
      const smooth = 0.5 + raw * 0.5;
      const steps = 6;
      const stepped = Math.floor(smooth * steps) / steps;
      return stepped + (smooth * steps - Math.floor(smooth * steps)) * 0.25 / steps;
    }
    case 'glitch': {
      const smooth = 0.5 + raw * 0.5;
      const steps = 8;
      return Math.floor(smooth * steps) / steps + 0.06;
    }
    case 'gentle':
      return 0.5 + raw * 0.32;
    case 'smooth':
    default:
      return 0.5 + raw * 0.5;
  }
}

export class Planet {
  constructor(typeDef, options) {
    this.type = typeDef;
    this.radius = options.radius;
    this.orbitRadius = options.orbitRadius;
    this.orbitSpeed = options.orbitSpeed;
    this.orbitAngle = options.orbitPhase;
    this.inclination = options.inclination;
    this.spinAxis = options.spinAxis;
    this.spinSpeed = options.spinSpeed;
    this.spinAngle = 0;
    this.visited = false;

    this.rng = createRng(options.seed);
    this.name = generatePlanetName(this.rng, options.orbitIndex);
    this.noise3D = createNoise3D(this.rng.next);
    this.noiseOffset = new THREE.Vector3(this.rng.range(-50, 50), this.rng.range(-50, 50), this.rng.range(-50, 50));

    this.group = new THREE.Group();
    this.prevCenter = new THREE.Vector3();
    this.prevQuaternion = new THREE.Quaternion();
    this.deltaQuaternion = new THREE.Quaternion();

    this.collectibles = [];
    this.collectedCount = 0;
    this.creatures = [];
    this.speciesName = null;
    this.speciesScanned = false;
    this.baits = [];

    this.buildTerrain();
    this.buildLiquid();
    this.buildAtmosphere();
    this.buildProps();
    this.buildCollectibles();
    this.buildCreatures();
    this.buildBait();
    this.buildParticles();
    this.applyOrbitTransform();
  }

  // --- generation -----------------------------------------------------------

  rawNoise(direction) {
    const f = this.type.noiseFrequency;
    const o = this.noiseOffset;
    let sum = 0;
    let amplitude = 0.55;
    let freq = f;
    for (let octave = 0; octave < 4; octave++) {
      sum += amplitude * this.noise3D(direction.x * freq + o.x, direction.y * freq + o.y, direction.z * freq + o.z);
      amplitude *= 0.5;
      freq *= 2.0;
    }
    return sum;
  }

  // Normalized elevation in [0, 1] for a unit direction in planet-local space.
  // Liquids with a `basin` factor get their underwater terrain pushed deeper,
  // so swimmable worlds have real depth instead of ankle-high ponds.
  elevationAt(localDirection) {
    const raw = this.rawNoise(localDirection);
    let elevation = shapeElevation(this.type.shape, raw, this.noise3D, localDirection, this.type.noiseFrequency);
    const liquid = this.type.liquid;
    if (liquid && liquid.basin && elevation < liquid.level) {
      elevation = liquid.level - (liquid.level - elevation) * liquid.basin;
    }
    return THREE.MathUtils.clamp(elevation, 0, 1);
  }

  surfaceRadiusFor(elevation) {
    return this.radius * (1 + this.type.amplitude * (elevation * 2 - 1));
  }

  // Exact terrain radius along a planet-local direction, raycast against the
  // rendered mesh so collision matches the flat low-poly faces. Frozen seas
  // ('solid' liquids) are walkable, so they clamp the ground upward.
  groundRadiusLocal(localDirection) {
    const startRadius = this.radius * (1 + this.type.amplitude) + 6;
    _groundRay.origin.copy(localDirection).multiplyScalar(startRadius);
    _groundRay.direction.copy(localDirection).negate();
    const hit = this.terrain.geometry.boundsTree.raycastFirst(_groundRay);
    let ground = hit ? hit.point.length() : this.surfaceRadiusFor(this.elevationAt(localDirection));
    if (this.type.liquidClass === 'solid' && this.type.liquid) {
      ground = Math.max(ground, this.liquidRadius());
    }
    return ground;
  }

  // Terrain height (distance from center) along a world-space direction.
  heightAtWorldDirection(worldDirection) {
    const local = worldDirection.clone().applyQuaternion(this.group.quaternion.clone().invert()).normalize();
    return this.groundRadiusLocal(local);
  }

  liquidRadius() {
    return this.type.liquid ? this.surfaceRadiusFor(this.type.liquid.level) : 0;
  }

  colorForElevation(elevation) {
    const stops = this.type.colorStops;
    let chosen = stops[0][1];
    for (const [threshold, color] of stops) {
      if (elevation >= threshold) chosen = color;
    }
    return new THREE.Color(chosen);
  }

  buildTerrain() {
    const geometry = new THREE.IcosahedronGeometry(this.radius, TERRAIN_DETAIL);
    const positions = geometry.attributes.position;
    const direction = new THREE.Vector3();
    const elevations = new Float32Array(positions.count);

    for (let i = 0; i < positions.count; i++) {
      direction.fromBufferAttribute(positions, i).normalize();
      const elevation = this.elevationAt(direction);
      elevations[i] = elevation;
      direction.multiplyScalar(this.surfaceRadiusFor(elevation));
      positions.setXYZ(i, direction.x, direction.y, direction.z);
    }

    const colors = new Float32Array(positions.count * 3);
    const faceColor = new THREE.Color();
    for (let i = 0; i < positions.count; i += 3) {
      const faceElevation = (elevations[i] + elevations[i + 1] + elevations[i + 2]) / 3;
      faceColor.copy(this.colorForElevation(faceElevation));
      const shade = this.rng.range(0.94, 1.06);
      faceColor.multiplyScalar(shade);
      for (let v = 0; v < 3; v++) faceColor.toArray(colors, (i + v) * 3);
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    geometry.computeBoundsTree();

    this.terrain = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.95,
      metalness: 0,
    }));
    this.group.add(this.terrain);
  }

  buildLiquid() {
    const liquid = this.type.liquid;
    if (!liquid) return;
    const geometry = new THREE.IcosahedronGeometry(this.liquidRadius(), LIQUID_DETAIL);
    const positions = geometry.attributes.position;
    const direction = new THREE.Vector3();
    for (let i = 0; i < positions.count; i++) {
      direction.fromBufferAttribute(positions, i);
      const wobble = 1 + this.noise3D(direction.x * 0.3, direction.y * 0.3, direction.z * 0.3) * 0.004;
      positions.setXYZ(i, direction.x * wobble, direction.y * wobble, direction.z * wobble);
    }
    geometry.computeVertexNormals();
    const material = new THREE.MeshStandardMaterial({
      color: liquid.color,
      transparent: liquid.opacity < 1,
      opacity: liquid.opacity,
      flatShading: true,
      roughness: 0.25,
      metalness: 0.1,
      emissive: liquid.emissive,
      emissiveIntensity: liquid.emissiveIntensity,
    });
    this.group.add(new THREE.Mesh(geometry, material));
  }

  buildAtmosphere() {
    const geometry = new THREE.SphereGeometry(this.radius * 1.25, 32, 24);
    const material = new THREE.ShaderMaterial({
      uniforms: { glowColor: { value: new THREE.Color(this.type.atmosphere) } },
      vertexShader: ATMOSPHERE_SHADER.vertexShader,
      fragmentShader: ATMOSPHERE_SHADER.fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    this.group.add(new THREE.Mesh(geometry, material));
  }

  randomSurfacePoint(minE, maxE, maxTries = 30) {
    const direction = new THREE.Vector3();
    for (let attempt = 0; attempt < maxTries; attempt++) {
      direction.set(this.rng.range(-1, 1), this.rng.range(-1, 1), this.rng.range(-1, 1));
      if (direction.lengthSq() < 0.01) continue;
      direction.normalize();
      const elevation = this.elevationAt(direction);
      if (elevation >= minE && elevation <= maxE) {
        return { direction: direction.clone(), elevation };
      }
    }
    return null;
  }

  buildProps() {
    const up = new THREE.Vector3(0, 1, 0);
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const tiltQuaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    const position = new THREE.Vector3();

    for (const config of this.type.props) {
      const geometry = buildPropGeometry(config.builder, this.rng, config);
      const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        flatShading: true,
        roughness: 0.85,
        metalness: 0,
      });
      if (propGlows(config.builder)) {
        material.emissive = new THREE.Color(config.glow || config.tint || '#888888');
        material.emissiveIntensity = 0.55;
      }
      const instanced = new THREE.InstancedMesh(geometry, material, config.count);
      let placed = 0;
      for (let i = 0; i < config.count; i++) {
        const spot = this.randomSurfacePoint(config.minE, config.maxE);
        if (!spot) continue;
        position.copy(spot.direction).multiplyScalar(this.groundRadiusLocal(spot.direction) - 0.08);
        quaternion.setFromUnitVectors(up, spot.direction);
        tiltQuaternion.setFromEuler(new THREE.Euler(this.rng.range(-0.06, 0.06), this.rng.range(0, Math.PI * 2), this.rng.range(-0.06, 0.06)));
        quaternion.multiply(tiltQuaternion);
        const s = this.rng.range(0.7, 1.4);
        scale.set(s, s, s);
        matrix.compose(position, quaternion, scale);
        instanced.setMatrixAt(placed++, matrix);
      }
      instanced.count = placed;
      this.group.add(instanced);
    }
  }

  buildCollectibles() {
    const discovery = this.type.discovery;
    const buildShape = COLLECTIBLE_SHAPES[discovery.shape] || COLLECTIBLE_SHAPES.gem;
    const material = new THREE.MeshStandardMaterial({
      color: discovery.color,
      emissive: discovery.color,
      emissiveIntensity: 1.4,
      roughness: 0.3,
    });
    const spriteMaterial = new THREE.SpriteMaterial({
      map: getHaloTexture(),
      color: discovery.color,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const minElevation = this.type.liquid ? this.type.liquid.level + 0.02 : 0;

    for (let i = 0; i < COLLECTIBLES_PER_PLANET; i++) {
      const spot = this.randomSurfacePoint(minElevation, 1);
      if (!spot) continue;
      const mesh = new THREE.Mesh(buildShape(), material);
      const halo = new THREE.Sprite(spriteMaterial);
      halo.scale.setScalar(3.2);
      mesh.add(halo);

      const baseRadius = this.groundRadiusLocal(spot.direction) + 1.1;
      mesh.position.copy(spot.direction).multiplyScalar(baseRadius);
      this.group.add(mesh);

      this.collectibles.push({
        mesh,
        direction: spot.direction,
        baseRadius,
        phase: this.rng.range(0, Math.PI * 2),
        name: generateDiscoveryName(this.rng, discovery),
        collected: false,
      });
    }
  }

  buildCreatures() {
    const config = this.type.creature;
    if (!config) return;
    this.speciesName = `${this.rng.pick(config.prefixes)} ${this.rng.pick(config.suffixes)}`;
    const count = this.rng.int(config.count[0], config.count[1]);
    for (let i = 0; i < count; i++) {
      this.creatures.push(new Creature(this, this.rng.int(0, 0xfffffff)));
    }
  }

  buildBait() {
    const color = this.type.discovery.color;
    const material = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.9,
      roughness: 0.4,
    });
    const minElevation = this.type.liquid && this.type.liquidClass !== 'solid' ? this.type.liquid.level + 0.02 : 0;
    for (let i = 0; i < 10; i++) {
      const spot = this.randomSurfacePoint(minElevation, 1);
      if (!spot) continue;
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), material);
      mesh.scale.y = 0.75;
      const baseRadius = this.groundRadiusLocal(spot.direction) + 0.5;
      mesh.position.copy(spot.direction).multiplyScalar(baseRadius);
      this.group.add(mesh);
      this.baits.push({ mesh, direction: spot.direction, baseRadius, phase: this.rng.range(0, Math.PI * 2), collected: false });
    }
  }

  buildParticles() {
    const config = this.type.particles;
    if (!config) return;
    const positions = new Float32Array(config.count * 3);
    const direction = new THREE.Vector3();
    for (let i = 0; i < config.count; i++) {
      direction.set(this.rng.range(-1, 1), this.rng.range(-1, 1), this.rng.range(-1, 1)).normalize();
      direction.multiplyScalar(this.radius + this.rng.range(1, config.height + this.radius * this.type.amplitude * 2));
      direction.toArray(positions, i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: config.color,
      size: config.size,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    this.group.add(new THREE.Points(geometry, material));
  }

  // --- runtime --------------------------------------------------------------

  get center() {
    return this.group.position;
  }

  applyOrbitTransform() {
    const a = this.orbitAngle;
    this.group.position.set(
      Math.cos(a) * this.orbitRadius,
      Math.sin(a) * this.orbitRadius * Math.sin(this.inclination),
      Math.sin(a) * this.orbitRadius * Math.cos(this.inclination)
    );
    this.group.quaternion.setFromAxisAngle(this.spinAxis, this.spinAngle);
  }

  update(dt, elapsed, playerWorldPosition, creatureFlags) {
    this.prevCenter.copy(this.group.position);
    this.prevQuaternion.copy(this.group.quaternion);

    this.orbitAngle += this.orbitSpeed * dt;
    this.spinAngle += this.spinSpeed * dt;
    this.applyOrbitTransform();

    this.deltaQuaternion.copy(this.group.quaternion).multiply(this.prevQuaternion.clone().invert());

    for (const item of this.collectibles) {
      if (item.collected) continue;
      const bob = Math.sin(elapsed * 1.8 + item.phase) * 0.35;
      item.mesh.position.copy(item.direction).multiplyScalar(item.baseRadius + bob);
      item.mesh.rotation.y = elapsed * 1.2 + item.phase;
    }

    for (const bait of this.baits) {
      if (bait.collected) continue;
      bait.mesh.position.copy(bait.direction).multiplyScalar(bait.baseRadius + Math.sin(elapsed * 2.2 + bait.phase) * 0.15);
    }

    // Creatures only think when the player is near enough to ever see them
    if (playerWorldPosition && playerWorldPosition.distanceTo(this.group.position) < CREATURE_UPDATE_RANGE) {
      const playerLocal = playerWorldPosition.clone()
        .sub(this.group.position)
        .applyQuaternion(this.group.quaternion.clone().invert());
      for (const creature of this.creatures) {
        creature.update(dt, elapsed, this, playerLocal, creatureFlags);
      }
    }
  }

  tryCollect(playerWorldPosition, reach = 2.4) {
    const worldPosition = new THREE.Vector3();
    for (const item of this.collectibles) {
      if (item.collected) continue;
      item.mesh.getWorldPosition(worldPosition);
      if (worldPosition.distanceToSquared(playerWorldPosition) < reach * reach) {
        item.collected = true;
        this.collectedCount++;
        this.group.remove(item.mesh);
        item.mesh.geometry.dispose();
        return item.name;
      }
    }
    return null;
  }

  tryScan(playerWorldPosition, reach = 5) {
    if (this.speciesScanned || this.creatures.length === 0) return null;
    const worldPosition = new THREE.Vector3();
    for (const creature of this.creatures) {
      creature.root.getWorldPosition(worldPosition);
      if (worldPosition.distanceToSquared(playerWorldPosition) < reach * reach) {
        this.speciesScanned = true;
        return this.speciesName;
      }
    }
    return null;
  }

  tryPickupBait(playerWorldPosition, reach = 2.2) {
    const worldPosition = new THREE.Vector3();
    for (const bait of this.baits) {
      if (bait.collected) continue;
      bait.mesh.getWorldPosition(worldPosition);
      if (worldPosition.distanceToSquared(playerWorldPosition) < reach * reach) {
        bait.collected = true;
        this.group.remove(bait.mesh);
        bait.mesh.geometry.dispose();
        return true;
      }
    }
    return false;
  }

  tryTame(playerWorldPosition, reach = 2.8) {
    const worldPosition = new THREE.Vector3();
    for (let i = 0; i < this.creatures.length; i++) {
      const creature = this.creatures[i];
      creature.root.getWorldPosition(worldPosition);
      if (worldPosition.distanceToSquared(playerWorldPosition) < reach * reach) {
        this.creatures.splice(i, 1);
        this.group.remove(creature.root);
        creature.root.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
        return { seed: creature.seed, typeId: this.type.id, species: this.speciesName, origin: this.name };
      }
    }
    return null;
  }

  // Fairy-pet perk: make the nearest undiscovered artifact visibly pulse
  pulseNearestArtifact(playerWorldPosition, elapsed) {
    const worldPosition = new THREE.Vector3();
    let nearest = null;
    let nearestDistance = Infinity;
    for (const item of this.collectibles) {
      if (item.collected) continue;
      item.mesh.getWorldPosition(worldPosition);
      const distance = worldPosition.distanceToSquared(playerWorldPosition);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = item;
      }
    }
    for (const item of this.collectibles) {
      if (item.collected) continue;
      const halo = item.mesh.children[0];
      if (!halo) continue;
      halo.scale.setScalar(item === nearest ? 4 + (Math.sin(elapsed * 5) + 1) * 3 : 3.2);
    }
  }

  totalDiscoveryCount() {
    return this.collectibles.length + (this.creatures.length > 0 ? 1 : 0);
  }

  discoveredCount() {
    return this.collectedCount + (this.speciesScanned ? 1 : 0);
  }

  dispose() {
    this.group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((m) => m.dispose());
      }
    });
  }
}
