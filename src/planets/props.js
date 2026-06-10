import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Every builder returns a vertex-colored BufferGeometry whose origin sits at
// ground level with +Y pointing away from the planet center.

function paint(geometry, hexColor) {
  const color = new THREE.Color(hexColor);
  const count = geometry.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) color.toArray(colors, i * 3);
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geometry;
}

function place(geometry, x, y, z, rx = 0, ry = 0, rz = 0, scale = 1) {
  geometry.rotateX(rx);
  geometry.rotateY(ry);
  geometry.rotateZ(rz);
  if (scale !== 1) geometry.scale(scale, scale, scale);
  geometry.translate(x, y, z);
  return geometry;
}

function merge(parts) {
  const merged = mergeGeometries(parts.map((g) => g.toNonIndexed()));
  parts.forEach((g) => g.dispose());
  return merged;
}

function vary(rng, hexColor, spread = 0.08) {
  const color = new THREE.Color(hexColor);
  color.offsetHSL(rng.range(-0.02, 0.02), rng.range(-spread, spread), rng.range(-spread, spread));
  return `#${color.getHexString()}`;
}

const builders = {
  rock(rng, config) {
    const tint = config.tint || '#8f8a80';
    const parts = [];
    const lumps = rng.int(1, 3);
    for (let i = 0; i < lumps; i++) {
      const lump = paint(new THREE.IcosahedronGeometry(rng.range(0.5, 1.1), 0), vary(rng, tint));
      place(lump, rng.range(-0.5, 0.5), rng.range(0.1, 0.4), rng.range(-0.5, 0.5), rng.range(0, 1), rng.range(0, 3), rng.range(0, 1));
      parts.push(lump);
    }
    return merge(parts);
  },

  spikeRock(rng, config) {
    const tint = config.tint || '#5d4a6b';
    const parts = [];
    const spikes = rng.int(2, 4);
    for (let i = 0; i < spikes; i++) {
      const height = rng.range(1.2, 3);
      const spike = paint(new THREE.ConeGeometry(rng.range(0.3, 0.6), height, 5), vary(rng, tint));
      place(spike, rng.range(-0.7, 0.7), height * 0.45, rng.range(-0.7, 0.7), rng.range(-0.25, 0.25), rng.range(0, 3), rng.range(-0.25, 0.25));
      parts.push(spike);
    }
    return merge(parts);
  },

  cactus(rng) {
    const green = vary(rng, '#4a8f4a');
    const height = rng.range(1.6, 2.8);
    const parts = [place(paint(new THREE.CylinderGeometry(0.28, 0.34, height, 7), green), 0, height / 2, 0)];
    const arms = rng.int(1, 2);
    for (let i = 0; i < arms; i++) {
      const side = i === 0 ? 1 : -1;
      const armY = height * rng.range(0.4, 0.65);
      parts.push(place(paint(new THREE.CylinderGeometry(0.16, 0.18, 0.7, 6), green), side * 0.45, armY, 0, 0, 0, side * Math.PI / 2));
      parts.push(place(paint(new THREE.CylinderGeometry(0.16, 0.18, 0.8, 6), green), side * 0.72, armY + 0.4, 0));
    }
    if (rng.chance(0.4)) parts.push(place(paint(new THREE.SphereGeometry(0.14, 6, 5), '#ff7fb0'), 0, height + 0.05, 0));
    return merge(parts);
  },

  dryShrub(rng) {
    const parts = [];
    const stems = rng.int(3, 5);
    for (let i = 0; i < stems; i++) {
      const stem = paint(new THREE.CylinderGeometry(0.03, 0.05, rng.range(0.5, 0.9), 4), vary(rng, '#9a7a4a'));
      place(stem, 0, 0.3, 0, rng.range(-0.5, 0.5), rng.range(0, 6), rng.range(-0.5, 0.5));
      parts.push(stem);
    }
    return merge(parts);
  },

  palm(rng) {
    const parts = [];
    const height = rng.range(2.5, 3.6);
    const lean = rng.range(-0.12, 0.12);
    parts.push(place(paint(new THREE.CylinderGeometry(0.14, 0.24, height, 6), '#9a7a52'), 0, height / 2, 0, 0, 0, lean));
    const topX = -Math.sin(lean) * height;
    const fronds = 5;
    for (let i = 0; i < fronds; i++) {
      const angle = (i / fronds) * Math.PI * 2 + rng.range(0, 0.5);
      const frond = paint(new THREE.ConeGeometry(0.22, 1.8, 4), vary(rng, '#4faf5f'));
      frond.scale(1, 1, 0.3);
      place(frond, topX + Math.cos(angle) * 0.8, height + 0.1, Math.sin(angle) * 0.8, Math.PI / 2.6 * Math.cos(angle), -angle, Math.PI / 2.6 * Math.sin(angle) * 0.5);
      parts.push(frond);
    }
    return merge(parts);
  },

  coral(rng) {
    const parts = [];
    const color = rng.pick(['#ff7fa0', '#ffa05a', '#cf7fff', '#5affd0']);
    const branches = rng.int(3, 6);
    for (let i = 0; i < branches; i++) {
      const height = rng.range(0.6, 1.4);
      const branch = paint(new THREE.CylinderGeometry(0.06, 0.12, height, 5), vary(rng, color));
      place(branch, rng.range(-0.3, 0.3), height / 2, rng.range(-0.3, 0.3), rng.range(-0.4, 0.4), 0, rng.range(-0.4, 0.4));
      parts.push(branch);
      parts.push(place(paint(new THREE.SphereGeometry(0.12, 5, 4), vary(rng, color)), rng.range(-0.3, 0.3), height, rng.range(-0.3, 0.3)));
    }
    return merge(parts);
  },

  vent(rng) {
    const parts = [
      place(paint(new THREE.CylinderGeometry(0.5, 0.9, 1.1, 7), '#4a4040'), 0, 0.55, 0),
      place(paint(new THREE.CylinderGeometry(0.32, 0.5, 0.4, 7), '#332b2b'), 0, 1.25, 0),
    ];
    return merge(parts);
  },

  tentacle(rng) {
    const parts = [];
    const color = vary(rng, '#7a4a8f');
    const segments = 4;
    let x = 0;
    let y = 0;
    let bend = rng.range(-0.3, 0.3);
    for (let i = 0; i < segments; i++) {
      const length = 0.8 - i * 0.12;
      const radius = 0.22 - i * 0.045;
      const segment = paint(new THREE.CylinderGeometry(radius, radius + 0.05, length, 6), color);
      place(segment, x, y + length / 2, 0, 0, 0, bend * (i + 1) * 0.6);
      parts.push(segment);
      x -= Math.sin(bend * (i + 1) * 0.6) * length;
      y += Math.cos(bend * (i + 1) * 0.6) * length;
    }
    parts.push(place(paint(new THREE.SphereGeometry(0.16, 6, 5), '#c6ff4f'), x, y, 0));
    return merge(parts);
  },

  fairyTree(rng) {
    const height = rng.range(1.8, 3);
    const canopyColor = rng.pick(['#ff9ad5', '#b89aff', '#9adfff']);
    const parts = [
      place(paint(new THREE.CylinderGeometry(0.12, 0.2, height, 6), '#e8d8c8'), 0, height / 2, 0),
      place(paint(new THREE.IcosahedronGeometry(rng.range(0.8, 1.2), 1), vary(rng, canopyColor)), 0, height + 0.5, 0),
    ];
    if (rng.chance(0.6)) {
      parts.push(place(paint(new THREE.IcosahedronGeometry(0.5, 1), vary(rng, canopyColor)), rng.range(-0.7, 0.7), height + 0.1, rng.range(-0.7, 0.7)));
    }
    return merge(parts);
  },

  glowFlower(rng) {
    const bloomColor = rng.pick(['#ffe97f', '#ff9ad5', '#9adfff', '#c6ff8f']);
    const height = rng.range(0.5, 1.1);
    return merge([
      place(paint(new THREE.CylinderGeometry(0.03, 0.04, height, 4), '#5a8f5a'), 0, height / 2, 0),
      place(paint(new THREE.OctahedronGeometry(0.18, 0), bloomColor), 0, height + 0.12, 0),
    ]);
  },

  smallMushroom(rng, config) {
    const capColor = config.glow || '#d6a0ff';
    const height = rng.range(0.35, 0.7);
    return merge([
      place(paint(new THREE.CylinderGeometry(0.08, 0.11, height, 5), '#e8e0d8'), 0, height / 2, 0),
      place(paint(new THREE.SphereGeometry(0.28, 7, 5, 0, Math.PI * 2, 0, Math.PI / 2), vary(rng, capColor)), 0, height, 0),
    ]);
  },

  giantMushroom(rng) {
    const capColor = rng.pick(['#cf5a8f', '#8f5acf', '#5a8fcf']);
    const height = rng.range(2.2, 4);
    const capRadius = rng.range(1.2, 1.9);
    const cap = paint(new THREE.SphereGeometry(capRadius, 9, 6, 0, Math.PI * 2, 0, Math.PI / 2), vary(rng, capColor));
    cap.scale(1, 0.65, 1);
    return merge([
      place(paint(new THREE.CylinderGeometry(0.3, 0.45, height, 7), '#e8e0d8'), 0, height / 2, 0),
      place(cap, 0, height, 0),
      place(paint(new THREE.SphereGeometry(capRadius * 0.25, 5, 4), '#f8f0e8'), capRadius * 0.5, height + capRadius * 0.45, 0),
    ]);
  },

  leafyTree(rng) {
    const height = rng.range(1.6, 2.8);
    const green = rng.pick(['#4a8f3a', '#5aa84a', '#3a7a4a']);
    const parts = [place(paint(new THREE.CylinderGeometry(0.14, 0.22, height, 6), '#6a4a32'), 0, height / 2, 0)];
    const clumps = rng.int(2, 3);
    for (let i = 0; i < clumps; i++) {
      parts.push(place(
        paint(new THREE.IcosahedronGeometry(rng.range(0.7, 1.1), 1), vary(rng, green)),
        rng.range(-0.5, 0.5), height + rng.range(0, 0.8), rng.range(-0.5, 0.5)
      ));
    }
    return merge(parts);
  },

  fern(rng) {
    const parts = [];
    const blades = rng.int(4, 6);
    for (let i = 0; i < blades; i++) {
      const angle = (i / blades) * Math.PI * 2;
      const blade = paint(new THREE.ConeGeometry(0.12, rng.range(0.6, 1), 4), vary(rng, '#3a8f5a'));
      blade.scale(1, 1, 0.3);
      place(blade, Math.cos(angle) * 0.25, 0.35, Math.sin(angle) * 0.25, Math.cos(angle) * 0.7, -angle, Math.sin(angle) * 0.35);
      parts.push(blade);
    }
    return merge(parts);
  },

  snowPine(rng) {
    const height = rng.range(1.8, 3);
    const parts = [place(paint(new THREE.CylinderGeometry(0.12, 0.18, height * 0.4, 6), '#5a4a3a'), 0, height * 0.2, 0)];
    const tiers = 3;
    for (let i = 0; i < tiers; i++) {
      const t = i / tiers;
      const tier = paint(new THREE.ConeGeometry(0.9 * (1 - t * 0.55), height * 0.42, 7), i === 0 ? '#3a6a52' : vary(rng, '#e8f4f8', 0.04));
      place(tier, 0, height * (0.35 + t * 0.3), 0);
      parts.push(tier);
    }
    return merge(parts);
  },

  iceSpike(rng) {
    const parts = [];
    const spikes = rng.int(2, 4);
    for (let i = 0; i < spikes; i++) {
      const height = rng.range(1, 3.2);
      const spike = paint(new THREE.ConeGeometry(rng.range(0.2, 0.45), height, 5), vary(rng, '#cfeffc', 0.05));
      place(spike, rng.range(-0.6, 0.6), height * 0.42, rng.range(-0.6, 0.6), rng.range(-0.3, 0.3), rng.range(0, 3), rng.range(-0.3, 0.3));
      parts.push(spike);
    }
    return merge(parts);
  },

  crystal(rng, config) {
    const tint = config.tint || '#7fdfff';
    const parts = [];
    const shards = rng.int(2, 4);
    for (let i = 0; i < shards; i++) {
      const height = rng.range(0.8, 2.6);
      const shard = paint(new THREE.OctahedronGeometry(rng.range(0.25, 0.5), 0), vary(rng, tint, 0.05));
      shard.scale(1, height, 1);
      place(shard, rng.range(-0.6, 0.6), height * 0.35, rng.range(-0.6, 0.6), rng.range(-0.35, 0.35), rng.range(0, 3), rng.range(-0.35, 0.35));
      parts.push(shard);
    }
    return merge(parts);
  },

  obsidian(rng) {
    const parts = [];
    const shards = rng.int(2, 4);
    for (let i = 0; i < shards; i++) {
      const height = rng.range(0.9, 2.4);
      const shard = paint(new THREE.TetrahedronGeometry(rng.range(0.4, 0.8), 0), vary(rng, '#2b2233', 0.04));
      shard.scale(1, height, 1);
      place(shard, rng.range(-0.6, 0.6), height * 0.3, rng.range(-0.6, 0.6), rng.range(0, 0.6), rng.range(0, 3), rng.range(0, 0.6));
      parts.push(shard);
    }
    return merge(parts);
  },

  candyCane(rng) {
    const parts = [];
    const segmentHeight = 0.35;
    const segments = rng.int(5, 7);
    for (let i = 0; i < segments; i++) {
      const stripe = paint(new THREE.CylinderGeometry(0.14, 0.14, segmentHeight, 7), i % 2 === 0 ? '#ff4a5a' : '#fff8f8');
      place(stripe, 0, segmentHeight * (i + 0.5), 0);
      parts.push(stripe);
    }
    const hook = paint(new THREE.TorusGeometry(0.4, 0.13, 6, 10, Math.PI), '#ff4a5a');
    place(hook, 0.4, segmentHeight * segments, 0);
    parts.push(hook);
    return merge(parts);
  },

  lollipop(rng) {
    const color = rng.pick(['#ff5ad6', '#5ad6ff', '#ffd65a', '#8fff5a']);
    const height = rng.range(1.2, 2);
    const head = paint(new THREE.SphereGeometry(0.55, 9, 7), vary(rng, color));
    head.scale(1, 1, 0.35);
    return merge([
      place(paint(new THREE.CylinderGeometry(0.07, 0.07, height, 5), '#fff8f0'), 0, height / 2, 0),
      place(head, 0, height + 0.45, 0, 0, rng.range(0, 3), 0),
    ]);
  },

  gumdrop(rng) {
    const color = rng.pick(['#ff5a5a', '#5aff8f', '#5a8fff', '#ffdf5a', '#cf5aff']);
    const drop = paint(new THREE.SphereGeometry(rng.range(0.4, 0.8), 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), vary(rng, color));
    drop.scale(1, 0.8, 1);
    return merge([place(drop, 0, 0.05, 0)]);
  },

  glitchCube(rng) {
    const color = rng.pick(['#ff2bd6', '#2bffd6', '#2b6aff']);
    const parts = [];
    const cubes = rng.int(1, 3);
    for (let i = 0; i < cubes; i++) {
      const size = rng.range(0.4, 1.1);
      const cube = paint(new THREE.BoxGeometry(size, size, size), i === 0 ? color : '#10101c');
      place(cube, rng.range(-0.5, 0.5), rng.range(0.4, 2.2), rng.range(-0.5, 0.5), rng.range(0, 1), rng.range(0, 1), rng.range(0, 1));
      parts.push(cube);
    }
    return merge(parts);
  },
};

const GLOWING_BUILDERS = new Set(['glowFlower', 'smallMushroom', 'crystal', 'glitchCube', 'tentacle', 'coral']);

export function buildPropGeometry(builderName, rng, config) {
  return builders[builderName](rng, config);
}

export function propGlows(builderName) {
  return GLOWING_BUILDERS.has(builderName);
}
