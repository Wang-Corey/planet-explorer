import * as THREE from 'three';
import { buildCreatureVisual, animateCreatureParts } from '../planets/creatures.js';

const STORAGE_KEY = 'planet-explorer-pets-v1';

// One light bonus per home biome, applied while that pet is summoned.
export const PET_PERKS = {
  desert: { label: '+25% run speed', runMult: 1.25 },
  ocean: { label: '+60% swim speed', swimMult: 1.6 },
  toxic: { label: 'Creatures never flee from you', noFlee: true },
  fairy: { label: 'Beacon marks the nearest artifact', beacon: true },
  ice: { label: '+50% fuel recharge', rechargeMult: 1.5 },
  lava: { label: '-35% jetpack fuel burn', burnMult: 0.65 },
  forest: { label: '+30% jump height', jumpMult: 1.3 },
  mushroom: { label: 'Drift gently while falling', gravityMult: 0.7 },
  candy: { label: 'Treats are only eaten half the time', treatSaver: true },
  crystal: { label: 'Wider pickup reach', reachMult: 1.6 },
  glitch: { label: '+25% boost top speed', boostCapMult: 1.25 },
};

class Companion {
  constructor(scene, record) {
    this.scene = scene;
    const { root } = buildCreatureVisual(record.typeId, record.seed);
    this.root = root;
    this.meta = root.userData;
    this.bodyHeight = this.meta.bodyHeight * root.scale.x;
    this.anim = { phase: 0, jitterTimer: 0 };
    this.previousPosition = new THREE.Vector3();
    scene.add(root);
  }

  placeAt(player) {
    this.root.position.copy(player.position).addScaledVector(player.up, 1);
    this.previousPosition.copy(this.root.position);
  }

  update(dt, elapsed, player) {
    const up = player.up;
    const right = new THREE.Vector3().crossVectors(up, player.facing);
    if (right.lengthSq() < 1e-6) right.set(1, 0, 0);
    right.normalize();

    const target = player.position.clone()
      .addScaledVector(player.facing, -1.7)
      .addScaledVector(right, 1.4);
    if (this.meta.mode === 'float') target.addScaledVector(up, 1.2);

    this.root.position.lerp(target, 1 - Math.exp(-4 * dt));
    if (this.root.position.distanceToSquared(target) > 1600) this.root.position.copy(target);

    // Ground-dwelling pets settle onto the terrain while you walk
    const planet = player.planet;
    if (planet && this.meta.mode !== 'float' && player.grounded) {
      const direction = this.root.position.clone().sub(planet.center).normalize();
      const ground = planet.heightAtWorldDirection(direction) + this.bodyHeight;
      this.root.position.copy(planet.center).addScaledVector(direction, ground);
    }

    const velocity = this.root.position.clone().sub(this.previousPosition);
    const moveSpeed = THREE.MathUtils.clamp(velocity.length() / Math.max(dt, 1e-4), 0.5, 6);
    this.previousPosition.copy(this.root.position);
    const forward = velocity.addScaledVector(up, -velocity.dot(up));
    if (forward.lengthSq() > 1e-6) {
      forward.normalize();
      const basisRight = new THREE.Vector3().crossVectors(up, forward);
      const targetRotation = new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().makeBasis(basisRight, up, forward)
      );
      this.root.quaternion.slerp(targetRotation, 1 - Math.exp(-8 * dt));
    }

    animateCreatureParts(this.meta, this.anim, dt, elapsed, moveSpeed);
  }

  dispose() {
    this.scene.remove(this.root);
    this.root.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) object.material.dispose();
    });
  }
}

export class PetManager {
  constructor(scene) {
    this.scene = scene;
    this.companion = null;
    const saved = this.load();
    this.pets = saved.pets;
    this.activeIndex = saved.activeIndex;
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.pets)) {
          return { pets: parsed.pets, activeIndex: parsed.activeIndex ?? -1 };
        }
      }
    } catch {
      // Corrupt save: start fresh
    }
    return { pets: [], activeIndex: -1 };
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ pets: this.pets, activeIndex: this.activeIndex }));
  }

  get activePet() {
    return this.activeIndex >= 0 ? this.pets[this.activeIndex] : null;
  }

  perksForActive() {
    const pet = this.activePet;
    return pet ? (PET_PERKS[pet.typeId] || {}) : {};
  }

  tame(record, player) {
    this.pets.push(record);
    if (this.activeIndex < 0) this.activeIndex = this.pets.length - 1;
    this.save();
    this.summon(player);
  }

  // Cycle active pet: each press moves to the next, then to "no pet", then wraps.
  cycle(player) {
    if (this.pets.length === 0) return;
    this.activeIndex = this.activeIndex >= this.pets.length - 1 ? -1 : this.activeIndex + 1;
    this.save();
    this.summon(player);
  }

  summon(player) {
    if (this.companion) {
      this.companion.dispose();
      this.companion = null;
    }
    const pet = this.activePet;
    if (pet) {
      this.companion = new Companion(this.scene, pet);
      this.companion.placeAt(player);
    }
    player.perks = this.perksForActive();
  }

  update(dt, elapsed, player) {
    if (this.companion) this.companion.update(dt, elapsed, player);
  }
}
