// Smoke test: load the game in headless Chrome, click through the start
// overlay, simulate a few seconds of play, and capture screenshots.
import { chromium } from 'playwright-core';

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

const errors = [];
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`console.error: ${msg.text()}`);
});

await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForSelector('#start-overlay', { timeout: 15000 });
await page.waitForTimeout(3000); // let planets generate + first frames render
await page.screenshot({ path: '/tmp/pe-title.png' });

await page.click('#start-overlay');
await page.waitForTimeout(2000);
await page.screenshot({ path: '/tmp/pe-spawn.png' });

// Walk forward, then jump + jetpack
await page.keyboard.down('w');
await page.waitForTimeout(2500);
await page.keyboard.up('w');
await page.screenshot({ path: '/tmp/pe-walk.png' });

await page.keyboard.down(' ');
await page.keyboard.down('w');
await page.keyboard.down('Shift');
await page.waitForTimeout(3500);
await page.screenshot({ path: '/tmp/pe-jetpack.png' });
await page.keyboard.up(' ');
await page.keyboard.up('w');
await page.keyboard.up('Shift');

// Teleport next to a collectible and confirm the discovery loop fires
const collectResult = await page.evaluate(() => {
  const { player, system } = window.__game;
  const planet = system.nearestPlanetTo(player.position);
  const item = planet.collectibles.find((i) => !i.collected);
  if (!item) return 'no collectible found';
  const worldPosition = item.mesh.position.clone()
    .applyQuaternion(planet.group.quaternion)
    .add(planet.group.position);
  player.position.copy(worldPosition);
  player.velocity.set(0, 0, 0);
  return 'teleported';
});
await page.waitForTimeout(800);
const counter = await page.textContent('#disc-total');
console.log(`collect test: ${collectResult}, discoveries counter now "${counter.trim()}"`);
await page.screenshot({ path: '/tmp/pe-collect.png' });

// Drop into a swimmable ocean and confirm swim mode engages
const swimResult = await page.evaluate(() => {
  const { player, system } = window.__game;
  const swimPlanets = system.planets.filter((p) => p.type.liquidClass === 'swim');
  if (swimPlanets.length === 0) return 'no swim planet in this system';
  for (const planet of swimPlanets) {
    for (let attempt = 0; attempt < 300; attempt++) {
      const direction = new player.position.constructor(
        Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1
      ).normalize();
      const terrain = planet.heightAtWorldDirection(direction);
      if (terrain + 2.5 < planet.liquidRadius()) {
        player.position.copy(planet.center).addScaledVector(direction, planet.liquidRadius() - 0.5);
        player.velocity.set(0, 0, 0);
        player.grounded = false;
        return `dropped into ${planet.type.id} liquid`;
      }
    }
  }
  return 'no deep liquid spot found on any swim planet';
});
await page.waitForTimeout(1200);
const swimState = await page.evaluate(() => ({
  swimming: window.__game.player.swimming,
  planetType: window.__game.player.planet.type.id,
}));
console.log(`swim test: ${swimResult} ->`, JSON.stringify(swimState));
await page.screenshot({ path: '/tmp/pe-swim.png' });

// Walk up to a creature and confirm the species scan registers
const scanResult = await page.evaluate(() => {
  const { player, system } = window.__game;
  const planet = system.planets.find((p) => p.creatures.length > 0 && !p.speciesScanned);
  if (!planet) return 'no unscanned creatures';
  const creature = planet.creatures[0];
  const worldPosition = creature.root.position.clone()
    .applyQuaternion(planet.group.quaternion)
    .add(planet.group.position);
  player.position.copy(worldPosition).addScaledVector(worldPosition.clone().sub(planet.center).normalize(), 1.5);
  player.velocity.set(0, 0, 0);
  return `teleported to a ${planet.type.id} creature`;
});
await page.waitForTimeout(800);
const scanned = await page.evaluate(() => window.__game.player.planet.speciesScanned);
console.log(`scan test: ${scanResult} -> speciesScanned=${scanned}`);
await page.screenshot({ path: '/tmp/pe-creature.png' });

// Grab a treat, then lure-feed a creature and confirm it joins the pet collection
const tameResult = await page.evaluate(() => {
  const { player, system, petManager } = window.__game;
  const planet = system.planets.find((p) => p.creatures.length > 0);
  if (!planet) return 'no creatures left';
  const bait = planet.baits.find((b) => !b.collected);
  if (bait) {
    const baitWorld = bait.mesh.position.clone().applyQuaternion(planet.group.quaternion).add(planet.group.position);
    player.position.copy(baitWorld);
    player.velocity.set(0, 0, 0);
  }
  return `bait at ${planet.type.id}, pets before: ${petManager.pets.length}`;
});
await page.waitForTimeout(500);
const treats = await page.evaluate(() => window.__game.player.treats);
console.log(`bait test: ${tameResult} -> treats=${treats} (should be >0)`);

await page.keyboard.down('f');
await page.evaluate(() => {
  const { player, system } = window.__game;
  const planet = system.planets.find((p) => p.creatures.length > 0);
  const creature = planet.creatures[0];
  const creatureWorld = creature.root.position.clone().applyQuaternion(planet.group.quaternion).add(planet.group.position);
  player.position.copy(creatureWorld);
  player.velocity.set(0, 0, 0);
});
await page.waitForTimeout(600);
await page.keyboard.up('f');
const petState = await page.evaluate(() => ({
  pets: window.__game.petManager.pets.length,
  active: window.__game.petManager.activePet?.species ?? null,
  perks: Object.keys(window.__game.player.perks),
  saved: JSON.parse(localStorage.getItem('planet-explorer-pets-v1') || '{}').pets?.length ?? 0,
}));
console.log('tame test:', JSON.stringify(petState));
await page.screenshot({ path: '/tmp/pe-pet.png' });

// Jetpack fuel should drain while thrusting
const fuelBefore = await page.evaluate(() => window.__game.player.fuel);
await page.keyboard.down(' ');
await page.waitForTimeout(2000);
await page.keyboard.up(' ');
const fuelAfter = await page.evaluate(() => window.__game.player.fuel);
console.log(`fuel test: ${fuelBefore.toFixed(0)} -> ${fuelAfter.toFixed(0)} (should drop)`);

// Discovery log + new system
await page.keyboard.press('Tab');
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/pe-log.png' });
await page.keyboard.press('Tab');
await page.keyboard.press('n');
await page.waitForTimeout(2500);
await page.screenshot({ path: '/tmp/pe-newsystem.png' });

console.log(errors.length ? `ERRORS:\n${errors.join('\n')}` : 'NO CONSOLE ERRORS');
await browser.close();
