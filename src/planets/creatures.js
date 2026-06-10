import * as THREE from 'three';
import { createRng } from '../core/rng.js';

// Each archetype builder returns a Group whose userData describes how the
// shared Creature brain should move and animate it:
//   mode: 'walk' | 'hop' | 'float'
//   speed, bodyHeight, plus optional animation hooks:
//   legs (pivots that swing), wings (pivots that flap), pulse (mesh that
//   breathes), spin (mesh that rotates), jitterParts (meshes that teleport),
//   waddlePart (group that rocks side to side)

function material(color, options = {}) {
  return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.8, ...options });
}

function add(parent, geometry, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function legPivot(parent, x, y, z, length, radius, mat) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  add(pivot, new THREE.CylinderGeometry(radius, radius * 0.8, length, 5), mat, 0, -length / 2, 0);
  parent.add(pivot);
  return pivot;
}

const ARCHETYPES = {
  desert(rng) {
    const root = new THREE.Group();
    const hide = material(rng.pick(['#d9a05b', '#c2823f', '#e8c890']));
    const body = add(root, new THREE.SphereGeometry(0.5, 8, 6), hide);
    body.scale.set(0.9, 0.8, 1.2);
    add(root, new THREE.CylinderGeometry(0.09, 0.13, 1.0, 5), hide, 0, 0.5, 0.45).rotation.x = 0.5;
    add(root, new THREE.SphereGeometry(0.2, 7, 5), hide, 0, 0.95, 0.75);
    add(root, new THREE.ConeGeometry(0.07, 0.35, 5), material('#6b4a2a'), 0, 0.92, 1.0).rotation.x = Math.PI / 2;
    const legs = [
      legPivot(root, -0.22, -0.25, 0, 1.3, 0.07, hide),
      legPivot(root, 0.22, -0.25, 0, 1.3, 0.07, hide),
    ];
    root.userData = { mode: 'walk', speed: 3.2, bodyHeight: 1.6, legs };
    return root;
  },

  ocean(rng) {
    const root = new THREE.Group();
    const shell = material(rng.pick(['#e85a4f', '#ff8c5a', '#cf5a8f']));
    const body = add(root, new THREE.SphereGeometry(0.55, 8, 6), shell);
    body.scale.set(1.3, 0.55, 1);
    add(root, new THREE.SphereGeometry(0.22, 6, 5), shell, -0.6, 0.05, 0.45);
    add(root, new THREE.SphereGeometry(0.22, 6, 5), shell, 0.6, 0.05, 0.45);
    for (const side of [-1, 1]) {
      const stalk = add(root, new THREE.CylinderGeometry(0.04, 0.04, 0.35, 4), shell, side * 0.18, 0.4, 0.3);
      add(stalk, new THREE.SphereGeometry(0.09, 6, 5), material('#1a1a2e'), 0, 0.22, 0);
    }
    const legs = [];
    for (let i = 0; i < 3; i++) {
      for (const side of [-1, 1]) {
        legs.push(legPivot(root, side * 0.6, -0.05, -0.3 + i * 0.3, 0.5, 0.05, shell));
      }
    }
    root.userData = { mode: 'walk', speed: 2.2, bodyHeight: 0.55, legs };
    return root;
  },

  toxic(rng) {
    const root = new THREE.Group();
    const slime = material(rng.pick(['#8fbf3f', '#6b8f2a', '#9a6bbf']), { roughness: 0.4 });
    const body = add(root, new THREE.SphereGeometry(0.55, 8, 6), slime);
    body.scale.set(1, 0.6, 1.4);
    add(root, new THREE.SphereGeometry(0.3, 7, 5), slime, 0, 0.1, -0.8).scale.set(1, 0.6, 1);
    for (const side of [-1, 1]) {
      const stalk = add(root, new THREE.CylinderGeometry(0.05, 0.06, 0.5, 4), slime, side * 0.2, 0.45, 0.4);
      stalk.rotation.z = -side * 0.3;
      add(stalk, new THREE.SphereGeometry(0.11, 6, 5), material('#c6ff4f', { emissive: '#c6ff4f', emissiveIntensity: 0.6 }), 0, 0.3, 0);
    }
    root.userData = { mode: 'walk', speed: 1.2, bodyHeight: 0.4, legs: [], pulse: body };
    return root;
  },

  fairy(rng) {
    const root = new THREE.Group();
    const glow = rng.pick(['#ffd6fa', '#b8a0ff', '#a0e8ff']);
    add(root, new THREE.CapsuleGeometry(0.14, 0.3, 3, 6), material('#5a4a6b')).rotation.x = Math.PI / 2;
    const wings = [];
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.1, 0.05, 0);
      const wing = add(pivot, new THREE.BoxGeometry(0.7, 0.02, 0.45), material(glow, { emissive: glow, emissiveIntensity: 0.5, transparent: true, opacity: 0.85 }), side * 0.38, 0, 0);
      wing.rotation.y = side * 0.2;
      root.add(pivot);
      wings.push({ pivot, side });
    }
    root.userData = { mode: 'float', speed: 2.6, bodyHeight: 0.3, wings };
    return root;
  },

  ice(rng) {
    const root = new THREE.Group();
    const waddlePart = new THREE.Group();
    root.add(waddlePart);
    const coat = material(rng.pick(['#2a3a4a', '#3a4a5d', '#1d2b3a']));
    const body = add(waddlePart, new THREE.CapsuleGeometry(0.35, 0.4, 4, 8), coat, 0, 0.15, 0);
    body.scale.set(1, 1, 0.9);
    add(waddlePart, new THREE.SphereGeometry(0.28, 8, 6), material('#f0f4f8'), 0, 0.1, 0.18).scale.set(0.85, 1.1, 0.7);
    add(waddlePart, new THREE.ConeGeometry(0.07, 0.25, 5), material('#ff9a3f'), 0, 0.55, 0.35).rotation.x = Math.PI / 2;
    const wings = [];
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.36, 0.25, 0);
      add(pivot, new THREE.BoxGeometry(0.1, 0.45, 0.2), coat, 0, -0.2, 0);
      waddlePart.add(pivot);
      wings.push({ pivot, side });
    }
    root.userData = { mode: 'walk', speed: 1.8, bodyHeight: 0.5, legs: [], wings, waddlePart };
    return root;
  },

  lava(rng) {
    const root = new THREE.Group();
    const rock = material('#2b2222');
    const shell = add(root, new THREE.SphereGeometry(0.6, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), rock);
    shell.scale.set(1.1, 0.8, 1.3);
    const core = add(root, new THREE.SphereGeometry(0.42, 8, 6), material('#ff6a00', { emissive: '#ff6a00', emissiveIntensity: 1.2 }), 0, -0.05, 0);
    core.scale.set(1, 0.5, 1.15);
    add(root, new THREE.SphereGeometry(0.18, 6, 5), rock, 0, 0.05, 0.75);
    const legs = [];
    for (const side of [-1, 1]) {
      legs.push(legPivot(root, side * 0.5, -0.1, 0.35, 0.4, 0.06, rock));
      legs.push(legPivot(root, side * 0.5, -0.1, -0.35, 0.4, 0.06, rock));
    }
    root.userData = { mode: 'walk', speed: 1.3, bodyHeight: 0.5, legs, pulse: core };
    return root;
  },

  forest(rng) {
    const root = new THREE.Group();
    const fur = material(rng.pick(['#8f6b4a', '#6b5a3a', '#a8825d']));
    const body = add(root, new THREE.CapsuleGeometry(0.3, 0.7, 4, 8), fur, 0, 0.1, 0);
    body.rotation.x = Math.PI / 2;
    add(root, new THREE.CylinderGeometry(0.1, 0.12, 0.6, 5), fur, 0, 0.5, 0.45).rotation.x = 0.45;
    const head = add(root, new THREE.SphereGeometry(0.18, 7, 5), fur, 0, 0.78, 0.62);
    for (const side of [-1, 1]) {
      add(head, new THREE.CylinderGeometry(0.025, 0.04, 0.45, 4), material('#d9c9a0'), side * 0.12, 0.28, -0.05).rotation.z = -side * 0.45;
    }
    const legs = [];
    for (const side of [-1, 1]) {
      legs.push(legPivot(root, side * 0.18, -0.05, 0.35, 0.85, 0.05, fur));
      legs.push(legPivot(root, side * 0.18, -0.05, -0.35, 0.85, 0.05, fur));
    }
    root.userData = { mode: 'walk', speed: 3.4, bodyHeight: 0.95, legs };
    return root;
  },

  mushroom(rng) {
    const root = new THREE.Group();
    const skin = material(rng.pick(['#9a7ab8', '#7a9ab8', '#b87a9a']), { roughness: 0.5 });
    const body = add(root, new THREE.SphereGeometry(0.45, 8, 6), skin);
    body.scale.set(1, 0.85, 1);
    add(root, new THREE.SphereGeometry(0.22, 6, 5), skin, -0.38, -0.15, -0.1);
    add(root, new THREE.SphereGeometry(0.22, 6, 5), skin, 0.38, -0.15, -0.1);
    for (const side of [-1, 1]) {
      add(root, new THREE.SphereGeometry(0.09, 6, 5), material('#fff0d6', { emissive: '#ffe97f', emissiveIntensity: 0.4 }), side * 0.18, 0.3, 0.35);
    }
    const cap = add(root, new THREE.SphereGeometry(0.22, 7, 5, 0, Math.PI * 2, 0, Math.PI / 2), material('#d6a0ff', { emissive: '#d6a0ff', emissiveIntensity: 0.4 }), 0, 0.38, -0.12);
    cap.scale.set(1, 0.7, 1);
    root.userData = { mode: 'hop', speed: 3.0, bodyHeight: 0.5, legs: [], pulse: body };
    return root;
  },

  candy(rng) {
    const root = new THREE.Group();
    const gummy = material(rng.pick(['#ff5a8f', '#5ad6ff', '#8fff5a', '#ffdf5a']), { roughness: 0.3, transparent: true, opacity: 0.92 });
    add(root, new THREE.SphereGeometry(0.4, 8, 6), gummy, 0, 0.1, 0).scale.set(1, 1.1, 0.8);
    const head = add(root, new THREE.SphereGeometry(0.28, 8, 6), gummy, 0, 0.7, 0);
    add(head, new THREE.SphereGeometry(0.1, 6, 5), gummy, -0.18, 0.22, 0);
    add(head, new THREE.SphereGeometry(0.1, 6, 5), gummy, 0.18, 0.22, 0);
    const legs = [
      legPivot(root, -0.18, -0.25, 0, 0.35, 0.09, gummy),
      legPivot(root, 0.18, -0.25, 0, 0.35, 0.09, gummy),
    ];
    const wings = [];
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.4, 0.3, 0);
      add(pivot, new THREE.CapsuleGeometry(0.08, 0.25, 3, 5), gummy, 0, -0.15, 0);
      root.add(pivot);
      wings.push({ pivot, side });
    }
    root.userData = { mode: 'walk', speed: 2.0, bodyHeight: 0.65, legs, wings };
    return root;
  },

  crystal(rng) {
    const root = new THREE.Group();
    const tone = rng.pick(['#7fdfff', '#ff7fd6', '#b8a0ff']);
    const core = add(root, new THREE.OctahedronGeometry(0.4, 0), material(tone, { emissive: tone, emissiveIntensity: 0.9, roughness: 0.2 }));
    core.scale.set(1, 1.4, 1);
    const legs = [];
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const pivot = new THREE.Group();
      pivot.position.set(Math.cos(angle) * 0.2, -0.3, Math.sin(angle) * 0.2);
      add(pivot, new THREE.CylinderGeometry(0.02, 0.015, 0.7, 4), material(tone, { emissive: tone, emissiveIntensity: 0.4 }), 0, -0.35, 0);
      root.add(pivot);
      legs.push(pivot);
    }
    root.userData = { mode: 'float', speed: 1.6, bodyHeight: 0.6, legs, spin: core };
    return root;
  },

  glitch(rng) {
    const root = new THREE.Group();
    const jitterParts = [];
    const colors = ['#ff2bd6', '#2bffd6', '#ffffff'];
    for (let i = 0; i < 3; i++) {
      const size = 0.32 - i * 0.07;
      const cube = add(
        root,
        new THREE.BoxGeometry(size, size, size),
        material(colors[i], { emissive: colors[i], emissiveIntensity: 0.9 }),
        rng.range(-0.25, 0.25), rng.range(-0.2, 0.3), rng.range(-0.25, 0.25)
      );
      jitterParts.push(cube);
    }
    root.userData = { mode: 'float', speed: 2.4, bodyHeight: 0.4, jitterParts };
    return root;
  },
};

// Deterministic visual from a seed, so a tamed pet can be rebuilt
// identically from its saved record.
export function buildCreatureVisual(typeId, seed) {
  const rng = createRng(seed);
  const root = ARCHETYPES[typeId](rng);
  root.scale.setScalar(rng.range(0.8, 1.35));
  return { root, rng };
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
  if (meta.waddlePart) meta.waddlePart.rotation.z = Math.sin(state.phase) * 0.16;
  if (meta.jitterParts) {
    state.jitterTimer -= dt;
    if (state.jitterTimer <= 0) {
      state.jitterTimer = 0.25;
      for (const part of meta.jitterParts) {
        part.position.x += (Math.random() - 0.5) * 0.2;
        part.position.y += (Math.random() - 0.5) * 0.2;
        part.position.z += (Math.random() - 0.5) * 0.2;
        part.position.clampLength(0, 0.5);
      }
    }
  }
}

export class Creature {
  constructor(planet, seed) {
    this.seed = seed;
    const { root, rng } = buildCreatureVisual(planet.type.id, seed);
    this.root = root;
    this.meta = root.userData;
    this.bodyHeight = this.meta.bodyHeight * root.scale.x;
    this.speed = this.meta.speed * rng.range(0.85, 1.2);

    const minElevation = planet.type.liquid && planet.type.liquidClass !== 'solid' && this.meta.mode !== 'float'
      ? planet.type.liquid.level + 0.04 : 0;
    const spot = planet.randomSurfacePoint(minElevation, 1) || { direction: new THREE.Vector3(0, 1, 0) };
    this.direction = spot.direction.clone();
    this.heading = new THREE.Vector3().randomDirection().cross(this.direction).normalize();
    if (this.heading.lengthSq() < 0.5) this.heading.set(1, 0, 0);
    this.phase = rng.range(0, Math.PI * 2);
    this.turnPhase = rng.range(0, Math.PI * 2);
    this.anim = { phase: this.phase, jitterTimer: 0 };

    planet.group.add(this.root);
  }

  update(dt, elapsed, planet, playerLocalPosition, flags) {
    const meta = this.meta;
    let speed = this.speed;

    if (playerLocalPosition) {
      const offset = this.root.position.clone().sub(playerLocalPosition);
      const distanceSq = offset.lengthSq();
      if (flags?.luring && distanceSq < 196 && distanceSq > 4) {
        // A treat is on offer: approach the player instead of wandering
        const toward = offset.negate();
        toward.addScaledVector(this.direction, -toward.dot(this.direction));
        if (toward.lengthSq() > 1e-4) this.heading.copy(toward.normalize());
      } else if (!flags?.noFlee && !flags?.luring && meta.mode !== 'float' && distanceSq < 49) {
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
