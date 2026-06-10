import * as THREE from 'three';

function makeGlowTexture(size = 128) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const half = size / 2;
  const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.25, 'rgba(255,235,190,0.55)');
  gradient.addColorStop(0.6, 'rgba(255,200,120,0.12)');
  gradient.addColorStop(1, 'rgba(255,180,80,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export function createEnvironment(scene) {
  // Star field
  const starCount = 2400;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  const starColor = new THREE.Color();
  for (let i = 0; i < starCount; i++) {
    const direction = new THREE.Vector3().randomDirection();
    direction.multiplyScalar(2600 + Math.random() * 1400);
    direction.toArray(positions, i * 3);
    starColor.setHSL(Math.random() < 0.12 ? 0.6 : Math.random() < 0.5 ? 0.12 : 0, 0.4 * Math.random(), 0.7 + Math.random() * 0.3);
    starColor.toArray(colors, i * 3);
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({
    size: 2.4,
    vertexColors: true,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
  }));
  scene.add(stars);

  // Sun
  const sunRadius = 38;
  const sun = new THREE.Mesh(
    new THREE.IcosahedronGeometry(sunRadius, 3),
    new THREE.MeshBasicMaterial({ color: '#ffdd66' })
  );
  scene.add(sun);

  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(),
    color: '#ffcf7f',
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  glow.scale.setScalar(sunRadius * 7);
  sun.add(glow);

  const sunLight = new THREE.PointLight('#fff2dd', 2.4, 0, 0);
  scene.add(sunLight);
  scene.add(new THREE.AmbientLight('#5a6a9a', 0.55));

  return { sunRadius };
}
