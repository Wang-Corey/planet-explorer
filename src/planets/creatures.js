import * as THREE from 'three';
import { createRng } from '../core/rng.js';
import { PLANET_TYPES, SANCTUARY_TYPE } from './types.js';

// Procedural creature generator: every species is assembled from seeded part
// pools (bodies, legs, eyes, tails, fins, antennae, biome growths) instead of
// fixed Earth-like archetypes. Machine Worlds roll angular chassis with piston
// legs and sensor lenses. ~10% of species come out 'radiant'.
//
// The returned Group's userData carries the animation hooks consumed by
// animateCreatureParts: { mode, speed, bodyHeight, legs, wings, pulse, spin,
// jitterParts, radiant }.

const TYPE_BY_ID = new Map([...PLANET_TYPES, SANCTUARY_TYPE].map((t) => [t.id, t]));

let sparkleTexture = null;

function getSparkleTexture() {
  if (sparkleTexture) return sparkleTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,0.95)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.3)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  sparkleTexture = new THREE.CanvasTexture(canvas);
  return sparkleTexture;
}

function add(parent, geometry, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function pivotAt(parent, x, y, z) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  parent.add(pivot);
  return pivot;
}

function shiftColor(rng, hex, lift = 0.12) {
  const color = new THREE.Color(hex);
  color.offsetHSL(rng.range(-0.05, 0.05), rng.range(0, 0.2), rng.range(0.02, lift));
  return color;
}

class PartKit {
  constructor(rng, typeDef, radiant) {
    this.rng = rng;
    this.mech = typeDef.id === 'mech';
    if (radiant) {
      this.base = new THREE.Color().setHSL(rng.next(), 0.85, 0.62);
      this.accent = new THREE.Color().setHSL(rng.next(), 0.9, 0.68);
    } else if (this.mech) {
      this.base = shiftColor(rng, rng.pick(['#8a929c', '#6a7280', '#aab4c0', '#7a6552']), 0.05);
      this.accent = new THREE.Color(rng.pick(['#16f0c8', '#ffd24f', '#ff5a3a']));
    } else {
      const stops = typeDef.colorStops.map((s) => s[1]);
      this.base = shiftColor(rng, rng.pick(stops));
      this.accent = shiftColor(rng, typeDef.discovery?.color || '#ffe97f', 0.05);
    }
    this.glowIntensity = radiant ? 0.85 : 0.45;

    this.bodyMat = new THREE.MeshStandardMaterial({
      color: this.base,
      flatShading: true,
      roughness: this.mech ? 0.35 : 0.75,
      metalness: this.mech ? 0.7 : 0,
      emissive: radiant ? this.base : 0x000000,
      emissiveIntensity: radiant ? 0.4 : 0,
    });
    this.glowMat = new THREE.MeshStandardMaterial({
      color: this.accent,
      emissive: this.accent,
      emissiveIntensity: this.glowIntensity,
      roughness: 0.4,
      flatShading: true,
    });
  }

  segmentGeometry(radius) {
    return this.mech
      ? new THREE.BoxGeometry(radius * 1.7, radius * 1.4, radius * 1.9)
      : new THREE.SphereGeometry(radius, 8, 6);
  }
}

function buildBody(root, rng, kit) {
  const plan = rng.pick(kit.mech ? ['segmented', 'slab', 'segmented'] : ['blob', 'segmented', 'tall', 'blob']);
  const radius = rng.range(0.35, 0.6);
  const bodyMeshes = [];

  if (plan === 'blob') {
    const body = add(root, kit.segmentGeometry(radius * 1.3), kit.bodyMat);
    body.scale.set(rng.range(0.8, 1.3), rng.range(0.6, 1.1), rng.range(0.9, 1.5));
    bodyMeshes.push(body);
  } else if (plan === 'slab') {
    const body = add(root, new THREE.BoxGeometry(radius * 2.2, radius * 1.4, radius * 3), kit.bodyMat);
    bodyMeshes.push(body);
  } else if (plan === 'segmented') {
    const segments = rng.int(2, 4);
    for (let i = 0; i < segments; i++) {
      const segmentRadius = radius * (1 - i * 0.18);
      bodyMeshes.push(add(root, kit.segmentGeometry(segmentRadius), kit.bodyMat, 0, i * 0.06, -i * segmentRadius * 1.5));
    }
  } else {
    const orbs = rng.int(2, 3);
    for (let i = 0; i < orbs; i++) {
      bodyMeshes.push(add(root, kit.segmentGeometry(radius * (1 - i * 0.22)), kit.bodyMat, 0, i * radius * 1.4, 0));
    }
  }
  return { plan, radius, bodyMeshes, frontZ: radius * 1.2, topY: plan === 'tall' ? radius * 2.6 : radius * 0.8 };
}

function buildLegs(root, rng, kit, body) {
  const options = kit.mech ? [2, 4, 4, 4, 6] : [0, 2, 2, 3, 4, 4, 6, 8];
  const legCount = rng.pick(options);
  if (legCount === 0) return { legs: [], legLength: 0 };

  const legLength = rng.range(0.5, kit.mech ? 1.6 : 1.3);
  const legRadius = rng.range(0.04, 0.09);
  const legs = [];
  const rows = Math.max(1, Math.floor(legCount / 2));
  for (let i = 0; i < legCount; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const row = Math.floor(i / 2);
    const z = rows > 1 ? (row / (rows - 1) - 0.5) * body.radius * 2.2 : 0;
    const pivot = pivotAt(root, side * body.radius * 0.8, -body.radius * 0.3, z);
    add(pivot, new THREE.CylinderGeometry(legRadius, legRadius * 0.7, legLength, 5), kit.bodyMat, 0, -legLength / 2, 0);
    if (kit.mech) {
      add(pivot, new THREE.SphereGeometry(legRadius * 1.8, 6, 5), kit.glowMat, 0, -legLength / 2, 0);
      add(pivot, new THREE.BoxGeometry(legRadius * 4, legRadius * 1.5, legRadius * 5), kit.bodyMat, 0, -legLength, legRadius);
    }
    legs.push(pivot);
  }
  return { legs, legLength };
}

function buildHeadAndEyes(root, rng, kit, body) {
  const hasHead = rng.chance(0.75);
  let eyeAnchor = body.bodyMeshes[0];
  let anchorOffset = new THREE.Vector3(0, body.radius * 0.2, body.frontZ * 0.8);

  if (hasHead) {
    const neckLength = rng.range(0, 1.1);
    const headRadius = body.radius * rng.range(0.45, 0.7);
    const headY = body.topY + neckLength * 0.8;
    const headZ = body.frontZ * 0.7;
    if (neckLength > 0.15) {
      const neck = add(root, new THREE.CylinderGeometry(headRadius * 0.4, headRadius * 0.55, neckLength, 5), kit.bodyMat, 0, body.topY * 0.6 + neckLength / 2, headZ * 0.8);
      neck.rotation.x = 0.3;
    }
    const head = add(
      root,
      kit.mech ? new THREE.BoxGeometry(headRadius * 1.8, headRadius * 1.4, headRadius * 2) : new THREE.SphereGeometry(headRadius, 8, 6),
      kit.bodyMat, 0, headY, headZ
    );
    eyeAnchor = head;
    anchorOffset = new THREE.Vector3(0, 0, headRadius * 0.8);
  }

  if (kit.mech) {
    // Single sensor lens, Mechanoceros style
    const lens = add(eyeAnchor, new THREE.CylinderGeometry(0.1, 0.12, 0.06, 8), kit.glowMat, anchorOffset.x, anchorOffset.y, anchorOffset.z);
    lens.rotation.x = Math.PI / 2;
  } else {
    const eyeCount = rng.int(1, 4);
    const stalked = rng.chance(0.4);
    for (let i = 0; i < eyeCount; i++) {
      const spread = eyeCount > 1 ? (i / (eyeCount - 1) - 0.5) * 0.4 : 0;
      if (stalked) {
        const stalk = add(eyeAnchor, new THREE.CylinderGeometry(0.025, 0.035, 0.35, 4), kit.bodyMat, spread, anchorOffset.y + 0.2, anchorOffset.z * 0.6);
        stalk.rotation.x = -0.4;
        add(stalk, new THREE.SphereGeometry(0.07, 6, 5), kit.glowMat, 0, 0.2, 0);
      } else {
        add(eyeAnchor, new THREE.SphereGeometry(0.07, 6, 5), kit.glowMat, spread, anchorOffset.y, anchorOffset.z);
      }
    }
  }
}

function buildExtras(root, rng, kit, body, mode) {
  const meta = { wings: null, pulse: null, spin: null, jitterParts: null, legsExtra: [] };
  const pool = ['tail', 'horns', 'antennae', 'wings', 'spines', 'growth'];
  if (mode === 'float') pool.push('tentacles', 'tentacles');
  const picks = rng.int(1, 3);

  for (let i = 0; i < picks; i++) {
    switch (rng.pick(pool)) {
      case 'tail': {
        const links = rng.int(2, 4);
        for (let j = 0; j < links; j++) {
          const linkRadius = body.radius * (0.5 - j * 0.1);
          if (linkRadius <= 0.05) break;
          add(root, kit.segmentGeometry(linkRadius), kit.bodyMat, 0, body.radius * 0.1 + j * 0.05, -body.frontZ - (j + 1) * linkRadius * 1.6);
        }
        break;
      }
      case 'horns': {
        const pairs = rng.int(1, 2);
        for (let j = 0; j < pairs; j++) {
          for (const side of [-1, 1]) {
            const horn = add(root, new THREE.ConeGeometry(0.06, rng.range(0.25, 0.6), 5), kit.mech ? kit.glowMat : kit.bodyMat, side * (0.15 + j * 0.12), body.topY + 0.15, body.frontZ * 0.4);
            horn.rotation.z = -side * 0.5;
          }
        }
        break;
      }
      case 'antennae': {
        for (const side of [-1, 1]) {
          const stalk = add(root, new THREE.CylinderGeometry(0.02, 0.03, 0.6, 4), kit.bodyMat, side * 0.12, body.topY + 0.25, body.frontZ * 0.3);
          stalk.rotation.z = -side * 0.35;
          add(stalk, new THREE.SphereGeometry(0.06, 5, 4), kit.glowMat, 0, 0.33, 0);
        }
        break;
      }
      case 'wings': {
        meta.wings = [];
        for (const side of [-1, 1]) {
          const pivot = pivotAt(root, side * body.radius * 0.7, body.topY * 0.6, 0);
          const wingMat = kit.mech ? kit.bodyMat : new THREE.MeshStandardMaterial({
            color: kit.accent, emissive: kit.accent, emissiveIntensity: 0.4,
            transparent: true, opacity: 0.8, flatShading: true, side: THREE.DoubleSide,
          });
          add(pivot, new THREE.BoxGeometry(rng.range(0.5, 0.9), 0.03, rng.range(0.3, 0.55)), wingMat, side * 0.3, 0, 0);
          meta.wings.push({ pivot, side });
        }
        break;
      }
      case 'spines': {
        const count = rng.int(3, 5);
        for (let j = 0; j < count; j++) {
          add(root, new THREE.ConeGeometry(0.07, rng.range(0.2, 0.45), 4), kit.glowMat, 0, body.topY * 0.9, body.frontZ - j * (body.frontZ * 2.2) / count);
        }
        break;
      }
      case 'tentacles': {
        const count = rng.int(3, 5);
        for (let j = 0; j < count; j++) {
          const angle = (j / count) * Math.PI * 2;
          const pivot = pivotAt(root, Math.cos(angle) * body.radius * 0.5, -body.radius * 0.4, Math.sin(angle) * body.radius * 0.5);
          add(pivot, new THREE.CylinderGeometry(0.035, 0.015, rng.range(0.5, 0.9), 4), kit.bodyMat, 0, -0.35, 0);
          meta.legsExtra.push(pivot);
        }
        break;
      }
      case 'growth': {
        const growthGeometry = kit.mech
          ? new THREE.CylinderGeometry(0.07, 0.09, 0.45, 6)
          : rng.pick([
            new THREE.OctahedronGeometry(0.14, 0),
            new THREE.SphereGeometry(0.12, 6, 5),
            new THREE.ConeGeometry(0.1, 0.3, 5),
            new THREE.BoxGeometry(0.16, 0.16, 0.16),
          ]);
        const clusters = rng.int(2, 4);
        for (let j = 0; j < clusters; j++) {
          add(root, growthGeometry.clone(), kit.glowMat, rng.range(-0.3, 0.3), body.topY * rng.range(0.6, 1.1), rng.range(-body.frontZ, body.frontZ));
        }
        growthGeometry.dispose();
        break;
      }
    }
  }
  return meta;
}

export function buildCreatureVisual(typeId, seed) {
  const typeDef = TYPE_BY_ID.get(typeId) || PLANET_TYPES[0];
  const rng = createRng(seed);
  const radiant = rng.chance(0.1);
  const kit = new PartKit(rng, typeDef, radiant);
  const root = new THREE.Group();

  const body = buildBody(root, rng, kit);
  const { legs, legLength } = buildLegs(root, rng, kit, body);

  let mode;
  let speed;
  if (legs.length > 0) {
    mode = 'walk';
    speed = rng.range(1.5, 3.5);
  } else if (rng.chance(0.45) && !kit.mech) {
    mode = 'hop';
    speed = rng.range(2.4, 3.6);
    for (const side of [-1, 1]) {
      add(root, new THREE.SphereGeometry(body.radius * 0.55, 7, 5), kit.bodyMat, side * body.radius * 0.8, -body.radius * 0.3, -body.radius * 0.4);
    }
  } else {
    mode = 'float';
    speed = rng.range(1.4, 2.8);
  }

  buildHeadAndEyes(root, rng, kit, body);
  const extras = buildExtras(root, rng, kit, body, mode);
  const allLegs = [...legs, ...extras.legsExtra];

  let pulse = null;
  if (!kit.mech && rng.chance(0.45)) pulse = body.bodyMeshes[0];

  let jitterParts = null;
  if (typeDef.id === 'glitch') {
    jitterParts = body.bodyMeshes.slice(1);
    if (jitterParts.length === 0) jitterParts = null;
  }

  if (radiant) {
    const sparkle = new THREE.Sprite(new THREE.SpriteMaterial({
      map: getSparkleTexture(),
      color: kit.accent,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    sparkle.scale.setScalar(2.6);
    root.add(sparkle);
  }

  const bodyHeight = mode === 'float'
    ? 0.5
    : legLength + body.radius * 0.5 + 0.1;

  root.userData = {
    mode,
    speed,
    bodyHeight: Math.max(bodyHeight, 0.35),
    legs: allLegs,
    wings: extras.wings,
    pulse,
    spin: null,
    jitterParts,
    radiant,
  };
  return { root, rng, radiant };
}

export function animateCreatureParts(meta, state, dt, elapsed, speed) {
  state.phase += dt * speed * 2.2;
  if (meta.legs) {
    meta.legs.forEach((pivot, i) => {
      pivot.rotation.x = Math.sin(state.phase + (i % 2) * Math.PI) * 0.55;
    });
  }
  if (meta.wings) {
    for (const { pivot, side } of meta.wings) {
      pivot.rotation.z = side * (0.4 + Math.sin(elapsed * 10 + state.phase) * 0.5);
    }
  }
  if (meta.pulse) {
    meta.pulse.scale.y = meta.pulse.scale.y * 0.9 + (0.7 + Math.sin(elapsed * 3 + state.phase) * 0.08) * 0.1;
  }
  if (meta.spin) meta.spin.rotation.y += dt * 1.5;
  if (meta.jitterParts) {
    state.jitterTimer -= dt;
    if (state.jitterTimer <= 0) {
      state.jitterTimer = 0.25;
      for (const part of meta.jitterParts) {
        part.position.x += (Math.random() - 0.5) * 0.2;
        part.position.y += (Math.random() - 0.5) * 0.2;
        part.position.z += (Math.random() - 0.5) * 0.2;
        part.position.clampLength(0, 0.6);
      }
    }
  }
}

export class Creature {
  constructor(planet, seed, options = {}) {
    this.seed = seed;
    this.speciesIndex = options.speciesIndex ?? -1;
    this.tame = !!options.tame;
    const typeId = options.typeId || planet.type.id;
    const { root } = buildCreatureVisual(typeId, seed);
    this.root = root;
    this.meta = root.userData;
    this.scale = options.scale || planet.rng.range(0.75, 1.3);
    root.scale.setScalar(this.scale);
    this.bodyHeight = this.meta.bodyHeight * this.scale;
    this.speed = this.meta.speed * planet.rng.range(0.85, 1.2);

    const minElevation = planet.type.liquid && planet.type.liquidClass !== 'solid' && this.meta.mode !== 'float'
      ? planet.type.liquid.level + 0.04 : 0;
    const spot = planet.randomSurfacePoint(minElevation, 1) || { direction: new THREE.Vector3(0, 1, 0) };
    this.direction = spot.direction.clone();
    this.heading = new THREE.Vector3().randomDirection().cross(this.direction).normalize();
    if (this.heading.lengthSq() < 0.5) this.heading.set(1, 0, 0);
    this.phase = planet.rng.range(0, Math.PI * 2);
    this.turnPhase = planet.rng.range(0, Math.PI * 2);
    this.anim = { phase: this.phase, jitterTimer: 0 };

    planet.group.add(this.root);
  }

  update(dt, elapsed, planet, playerLocalPosition, flags) {
    const meta = this.meta;
    let speed = this.speed;

    if (playerLocalPosition) {
      const offset = this.root.position.clone().sub(playerLocalPosition);
      const distanceSq = offset.lengthSq();
      const drawn = (flags?.luring || this.tame) && distanceSq < 196 && distanceSq > 4;
      if (drawn) {
        // A treat is on offer (or this is an old friend): approach the player
        const toward = offset.negate();
        toward.addScaledVector(this.direction, -toward.dot(this.direction));
        if (toward.lengthSq() > 1e-4) this.heading.copy(toward.normalize());
      } else if (!this.tame && !flags?.noFlee && !flags?.luring && meta.mode !== 'float' && distanceSq < 49) {
        // Shy: ground creatures run from the player
        offset.addScaledVector(this.direction, -offset.dot(this.direction));
        if (offset.lengthSq() > 1e-4) this.heading.copy(offset.normalize());
        speed *= 2.2;
      }
    }

    // Meander
    this.heading.applyAxisAngle(this.direction, Math.sin(elapsed * 0.6 + this.turnPhase) * 0.9 * dt);

    // Slide along the great circle, but stay out of liquid (floaters may cross)
    let moveSpeed = speed;
    if (meta.mode === 'hop') moveSpeed *= Math.max(0.1, Math.sin(elapsed * 4 + this.phase));
    const angle = (moveSpeed * dt) / planet.radius;
    const newDirection = this.direction.clone().multiplyScalar(Math.cos(angle)).addScaledVector(this.heading, Math.sin(angle)).normalize();
    const avoidsLiquid = planet.type.liquid && planet.type.liquidClass !== 'solid' && meta.mode !== 'float';
    if (avoidsLiquid && planet.groundRadiusLocal(newDirection) + 0.6 < planet.liquidRadius()) {
      this.heading.negate();
    } else {
      this.direction.copy(newDirection);
      this.heading.addScaledVector(this.direction, -this.heading.dot(this.direction)).normalize();
    }

    let altitude = this.bodyHeight;
    if (meta.mode === 'hop') altitude += Math.max(0, Math.sin(elapsed * 4 + this.phase)) * 1.2;
    if (meta.mode === 'float') altitude += 2.0 + Math.sin(elapsed * 1.4 + this.phase) * 0.5;
    this.root.position.copy(this.direction).multiplyScalar(planet.groundRadiusLocal(this.direction) + altitude);

    const right = new THREE.Vector3().crossVectors(this.direction, this.heading);
    this.root.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, this.direction, this.heading));

    animateCreatureParts(this.meta, this.anim, dt, elapsed, speed);
  }
}
