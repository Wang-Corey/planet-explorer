import * as THREE from 'three';
import { SolarSystem } from './world/SolarSystem.js';
import { createEnvironment } from './world/environment.js';
import { Player } from './player/Player.js';
import { CameraRig } from './player/CameraRig.js';
import { Hud } from './ui/hud.js';
import { randomSeed } from './core/rng.js';
import { initAudio, playChime, playWarp, playScan } from './core/audio.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#05060f');

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 8000);

const environment = createEnvironment(scene);
const hud = new Hud();
const player = new Player(scene);
const cameraRig = new CameraRig(camera, renderer.domElement);

let system = new SolarSystem(scene, randomSeed());
let totalCollected = 0;
let bannerPlanet = null;

player.spawnOn(system.planets[0]);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function lockPointer() {
  try {
    const result = renderer.domElement.requestPointerLock();
    if (result && result.catch) result.catch(() => {});
  } catch {
    // Pointer lock is unavailable (e.g. headless browsers); mouse look is optional there.
  }
}

const startOverlay = document.getElementById('start-overlay');
startOverlay.addEventListener('click', () => {
  initAudio();
  startOverlay.classList.add('hidden');
  lockPointer();
});
renderer.domElement.addEventListener('click', () => {
  if (document.pointerLockElement !== renderer.domElement) lockPointer();
});

function regenerateSystem() {
  system.dispose();
  system = new SolarSystem(scene, randomSeed());
  totalCollected = 0;
  bannerPlanet = null;
  hud.reset();
  player.spawnOn(system.planets[0]);
  playWarp();
}

window.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    hud.toggleLog();
  } else if (event.code === 'KeyN') {
    regenerateSystem();
  } else if (event.code === 'KeyR') {
    const nearest = system.nearestPlanetTo(player.position);
    if (nearest) {
      player.rescueTo(nearest);
      playWarp();
    }
  }
});

function checkSunRescue() {
  if (player.position.length() < environment.sunRadius + 6) {
    const nearest = system.nearestPlanetTo(player.position);
    if (nearest) {
      player.position.copy(nearest.center).addScaledVector(new THREE.Vector3(0, 1, 0), nearest.radius * 1.6);
      player.velocity.set(0, 0, 0);
      player.grounded = false;
      playWarp();
    }
  }
}

function updatePlanetPresence() {
  const planet = player.planet;
  if (!planet) return;
  const surfaceDistance = player.position.distanceTo(planet.center) - planet.radius;
  if (surfaceDistance < planet.radius * 0.9) {
    if (bannerPlanet !== planet) {
      bannerPlanet = planet;
      planet.visited = true;
      hud.setPlanet(planet);
      hud.showBanner(planet);
    }
    const collectedName = planet.tryCollect(player.position);
    if (collectedName) {
      totalCollected++;
      playChime();
      hud.addDiscovery(planet, collectedName);
    }
    const scannedSpecies = planet.tryScan(player.position);
    if (scannedSpecies) {
      totalCollected++;
      playScan();
      hud.addDiscovery(planet, `${scannedSpecies} (creature)`);
    }
    hud.updateCounts(totalCollected, system.totalDiscoveries(), planet);
  }
}

function updateLiquidTint() {
  const planet = player.planet;
  const submerged = planet
    && planet.type.liquid
    && planet.type.liquidClass === 'swim'
    && camera.position.distanceTo(planet.center) < planet.liquidRadius();
  hud.setLiquidTint(submerged ? planet.type.liquid.color : null);
}

window.__game = { player, get system() { return system; } };

const clock = new THREE.Clock();
let elapsed = 0;

function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  elapsed += dt;

  system.update(dt, elapsed, player.position);
  player.update(dt, cameraRig.forward, camera, system);
  cameraRig.update(dt, player, system);
  checkSunRescue();
  updatePlanetPresence();
  updateLiquidTint();
  hud.setFuel(player.fuelFraction);

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
