import * as THREE from 'three';
import { createRng } from '../core/rng.js';
import { PLANET_TYPES } from '../planets/types.js';
import { Planet } from '../planets/Planet.js';

const PLANET_COUNT = 8;
const FIRST_ORBIT = 130;
const ORBIT_GAP = 85;

export class SolarSystem {
  constructor(scene, seed) {
    this.scene = scene;
    this.seed = seed;
    this.planets = [];
    this.group = new THREE.Group();
    scene.add(this.group);
    this.generate();
  }

  generate() {
    const rng = createRng(this.seed);

    // Shuffle types so every system has distinct planets; extras fill randomly.
    const typePool = [...PLANET_TYPES];
    for (let i = typePool.length - 1; i > 0; i--) {
      const j = rng.int(0, i);
      [typePool[i], typePool[j]] = [typePool[j], typePool[i]];
    }

    for (let i = 0; i < PLANET_COUNT; i++) {
      const typeDef = typePool[i % typePool.length];
      const spinAxis = new THREE.Vector3(rng.range(-0.25, 0.25), 1, rng.range(-0.25, 0.25)).normalize();
      const orbitRadius = FIRST_ORBIT + i * ORBIT_GAP + rng.range(-15, 15);
      const planet = new Planet(typeDef, {
        seed: rng.int(0, 0xfffffff),
        radius: rng.range(17, 28),
        orbitRadius,
        orbitSpeed: rng.range(0.008, 0.02) * (rng.chance(0.25) ? -1 : 1) * Math.sqrt(FIRST_ORBIT / orbitRadius),
        orbitPhase: rng.range(0, Math.PI * 2),
        orbitIndex: i,
        inclination: rng.range(-0.18, 0.18),
        spinAxis,
        spinSpeed: rng.range(0.015, 0.045),
      });
      this.planets.push(planet);
      this.group.add(planet.group);
    }
  }

  update(dt, elapsed) {
    for (const planet of this.planets) planet.update(dt, elapsed);
  }

  nearestPlanetTo(position) {
    let nearest = null;
    let bestSurfaceDistance = Infinity;
    for (const planet of this.planets) {
      const surfaceDistance = position.distanceTo(planet.center) - planet.radius;
      if (surfaceDistance < bestSurfaceDistance) {
        bestSurfaceDistance = surfaceDistance;
        nearest = planet;
      }
    }
    return nearest;
  }

  totalCollectibles() {
    return this.planets.reduce((sum, p) => sum + p.collectibles.length, 0);
  }

  dispose() {
    for (const planet of this.planets) planet.dispose();
    this.scene.remove(this.group);
    this.planets = [];
  }
}
