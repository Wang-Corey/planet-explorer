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
