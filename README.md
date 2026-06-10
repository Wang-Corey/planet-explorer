# 🪐 Planet Explorer

A tiny, fully procedural solar system you can walk, jump, and jetpack around — right in the browser. Every system is generated from a random seed, so each one has its own eight planets with distinct terrain, biomes, props, atmospheres, and glowing artifacts to discover. Built with [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/).

Walk the curved surface of a world, jetpack into orbit, boost across space toward a distant planet, and collect the glowing relics scattered across every surface.

## Quick start

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Controls

| Input | Action |
| --- | --- |
| **WASD** / Arrow keys | Move along the surface (or steer while airborne) |
| **Space** | Jump; hold to fire the jetpack |
| **Shift** | Boost — run faster on foot, thrust harder in the air |
| **Mouse** | Look around (click to lock the pointer) |
| **Scroll** | Zoom the camera in/out |
| **Tab** | Toggle the discovery log |
| **N** | Generate a brand-new solar system |
| **R** | Rescue — teleport back onto the nearest planet |

Fall into the sun and you are automatically rescued to the nearest planet.

## How it works

The game runs entirely client-side. [src/main.js](src/main.js) wires up the renderer, scene, and the main animation loop, which each frame advances the solar system, updates the player physics, follows with the camera, and checks for collectible pickups.

Everything visible is generated from a seed, so a given seed always produces the same system.

### Procedural generation pipeline

- **[core/rng.js](src/core/rng.js)** — a small seeded pseudo-random generator (`next`, `range`, `int`, `pick`, `chance`). Reused everywhere so generation is deterministic per seed.
- **[world/SolarSystem.js](src/world/SolarSystem.js)** — shuffles the planet-type pool, then lays out eight planets on inclined orbits with their own radii, spin axes, and orbital speeds. Handles per-frame orbit updates, nearest-planet queries, and disposal when a new system is spawned.
- **[planets/types.js](src/planets/types.js)** — the data-driven catalog of planet archetypes (Desert, Ocean, Toxic, Fairy, Frozen, Volcanic, Forest, Fungal, Candy, Crystal, Corrupted). Each entry declares terrain shape, elevation color bands, optional liquid layer, scattered props, ambient particles, atmosphere color, and a themed naming scheme for discoveries. Also generates planet and artifact names.
- **[planets/Planet.js](src/planets/Planet.js)** — turns a type definition into a mesh. Layered 3D simplex noise drives an icosahedron's vertices to form terrain; a `shape` function (`ridged`, `dunes`, `terraced`, `glitch`, `gentle`, `smooth`) restyles the elevation profile. Builds the liquid shell, an additive-blended atmosphere shader, instanced surface props, ambient particles, and the eight glowing collectibles. Also exposes the analytic terrain-height lookup the player and camera collide against.
- **[planets/props.js](src/planets/props.js)** — geometry builders for the scenery (cacti, palms, coral, crystals, mushrooms, candy canes, glitch cubes, …), with a set of builders that glow.

### Player and camera

- **[player/Player.js](src/player/Player.js)** — spherical-gravity character controller. The "up" vector always points away from the nearest planet's center, so you can walk all the way around a world. Handles grounded walking/running, jumping, jetpack thrust, boosted flight with speed caps, analytic ground collision, and "planet carry" so you ride a planet's rotation and orbital motion while standing on it. Also drives the astronaut's limb animation, jet glow, and blob shadow.
- **[player/CameraRig.js](src/player/CameraRig.js)** — orbit-follow third-person camera with pointer-lock mouse look, scroll zoom, and terrain clipping avoidance, all kept consistent with the player's current up vector.

### Presentation

- **[world/environment.js](src/world/environment.js)** — star field, the central sun with an additive glow sprite, and scene lighting.
- **[core/audio.js](src/core/audio.js)** — Web Audio: a discovery chime, a warp sweep (new system / rescue), and a continuous filtered-noise jetpack loop that responds to thrust and boost.
- **[ui/hud.js](src/ui/hud.js)** + **[index.html](index.html)** — the heads-up display: current planet name/type, discovery counters, the "now entering" banner, pickup toasts, and the Tab discovery log.

## Project structure

```
index.html              # HUD markup + styles, entry script
src/
  main.js               # bootstrap, game loop, input wiring
  core/
    rng.js              # seeded PRNG
    audio.js            # Web Audio sound effects
  world/
    SolarSystem.js      # planet layout + orbital simulation
    environment.js      # stars, sun, lighting
  planets/
    types.js            # planet archetype catalog + name generation
    Planet.js           # mesh generation from a type definition
    props.js            # surface scenery geometry builders
  player/
    Player.js           # spherical-gravity character controller
    CameraRig.js        # third-person follow camera
  ui/
    hud.js              # HUD updates + discovery log
scripts/
  smoke.mjs             # headless Playwright smoke test
```

## Smoke test

[scripts/smoke.mjs](scripts/smoke.mjs) loads the running game in headless Chrome via `playwright-core`, clicks through the title screen, simulates walking and jetpacking, teleports next to a collectible to confirm the discovery loop fires, opens the log, spawns a new system, and reports any console errors — capturing screenshots to `/tmp` along the way.

```bash
npm run dev          # in one terminal
node scripts/smoke.mjs   # in another (requires Chrome + playwright-core)
```

## Tech

- [Three.js](https://threejs.org/) for WebGL rendering
- [simplex-noise](https://github.com/jwagner/simplex-noise.js) for terrain
- [Vite](https://vitejs.dev/) for dev server and bundling
