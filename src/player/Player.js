import * as THREE from 'three';
import { setJetpack, playSplash, playBounce } from '../core/audio.js';

const WALK_SPEED = 9;
const RUN_SPEED = 15;
const JUMP_SPEED = 15;
const SURFACE_GRAVITY = 42;
const GRAVITY_FALLOFF_EXPONENT = 1.35;
const DEEP_SPACE_GRAVITY = 5;
const JET_UP_ACCEL = 58;
const JET_THRUST_ACCEL = 30;
const BOOST_MULTIPLIER = 2.4;
const AIR_SPEED_CAP = 40;
const BOOST_SPEED_CAP = 100;
const AIR_DRAG = 0.06;
const GROUND_OFFSET = 1.0;
const CARRY_RANGE_FACTOR = 1.6;

const MAX_FUEL = 100;
const FUEL_BURN = 12;
const BOOST_BURN_MULTIPLIER = 2.2;
const STEER_BURN = 6;
const FUEL_RECHARGE = 35;

const SWIM_SPEED = 6.5;
const SWIM_ACCEL = 24;
const SWIM_VERTICAL_ACCEL = 16;
const WATER_DRAG = 1.6;
const BUOYANCY_ACCEL = 9;
const FLOAT_LINE = 0.35;
const HAZARD_BOUNCE_SPEED = 24;

export class Player {
  constructor(scene) {
    this.scene = scene;
    this.position = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.up = new THREE.Vector3(0, 1, 0);
    this.facing = new THREE.Vector3(0, 0, -1);
    this.grounded = false;
    this.planet = null;
    this.walkCycle = 0;
    this.jetting = false;
    this.swimming = false;
    this.fuel = MAX_FUEL;
    this.treats = 0;
    this.scrap = 0;
    this.luring = false;
    this.perks = {};

    this.keys = {};
    this.jumpQueued = false;
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !this.keys.Space) this.jumpQueued = true;
      this.keys[e.code] = true;
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });

    this.buildCharacter();
    this.buildShadow();
  }

  get fuelFraction() {
    return this.fuel / MAX_FUEL;
  }

  buildCharacter() {
    const suit = new THREE.MeshStandardMaterial({ color: '#f0f2f5', roughness: 0.6 });
    const accent = new THREE.MeshStandardMaterial({ color: '#ff8c3a', roughness: 0.5 });
    const visor = new THREE.MeshStandardMaterial({ color: '#1a2a4a', roughness: 0.15, metalness: 0.4 });

    this.character = new THREE.Group();

    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.42, 4, 10), suit);
    torso.position.y = 0.78;
    this.character.add(torso);

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), suit);
    helmet.position.y = 1.32;
    this.character.add(helmet);

    const visorMesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 8), visor);
    visorMesh.position.set(0, 1.34, 0.14);
    visorMesh.scale.set(1, 0.8, 0.75);
    this.character.add(visorMesh);

    const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.54, 0.26), accent);
    backpack.position.set(0, 0.85, -0.34);
    this.character.add(backpack);

    this.jetGlow = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.7, 7),
      new THREE.MeshBasicMaterial({ color: '#7fd0ff', transparent: true, opacity: 0 })
    );
    this.jetGlow.position.set(0, 0.35, -0.34);
    this.jetGlow.rotation.x = Math.PI;
    this.character.add(this.jetGlow);

    this.limbs = [];
    const limbGeometry = new THREE.CapsuleGeometry(0.09, 0.32, 3, 6);
    const limbSpots = [
      { x: -0.15, y: 0.42, arm: false }, { x: 0.15, y: 0.42, arm: false },
      { x: -0.42, y: 1.0, arm: true }, { x: 0.42, y: 1.0, arm: true },
    ];
    for (const spot of limbSpots) {
      const pivot = new THREE.Group();
      pivot.position.set(spot.x, spot.y, 0);
      const limb = new THREE.Mesh(limbGeometry, spot.arm ? suit : accent);
      limb.position.y = -0.24;
      pivot.add(limb);
      this.character.add(pivot);
      this.limbs.push({ pivot, arm: spot.arm, side: Math.sign(spot.x) });
    }

    // Headlamp so the night side of planets stays explorable
    const headlamp = new THREE.PointLight('#bfd4ff', 18, 30, 1.6);
    headlamp.position.y = 2.2;
    this.character.add(headlamp);

    this.scene.add(this.character);
  }

  buildShadow() {
    this.shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.85, 20),
      new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.3, depthWrite: false })
    );
    this.shadow.geometry.rotateX(-Math.PI / 2);
    this.shadow.renderOrder = 1;
    this.scene.add(this.shadow);
  }

  spawnOn(planet) {
    this.planet = planet;
    const direction = new THREE.Vector3(0, 1, 0).applyQuaternion(planet.group.quaternion);
    const height = planet.heightAtWorldDirection(direction);
    this.position.copy(planet.center).addScaledVector(direction, height + GROUND_OFFSET);
    this.velocity.set(0, 0, 0);
    this.up.copy(direction);
    this.grounded = true;
  }

  rescueTo(planet) {
    const direction = new THREE.Vector3().subVectors(this.position, planet.center).normalize();
    if (direction.lengthSq() < 0.5) direction.set(0, 1, 0);
    const height = planet.heightAtWorldDirection(direction);
    this.position.copy(planet.center).addScaledVector(direction, height + GROUND_OFFSET + 4);
    this.velocity.set(0, 0, 0);
    this.grounded = false;
  }

  applyPlanetCarry(planet) {
    const distance = this.position.distanceTo(planet.prevCenter);
    const surfaceHeight = planet.radius * (1 + planet.type.amplitude);
    if (!this.grounded && distance > surfaceHeight * CARRY_RANGE_FACTOR) return;

    const relative = this.position.clone().sub(planet.prevCenter).applyQuaternion(planet.deltaQuaternion);
    this.position.copy(planet.center).add(relative);
    this.velocity.applyQuaternion(planet.deltaQuaternion);
    this.up.applyQuaternion(planet.deltaQuaternion);
    this.facing.applyQuaternion(planet.deltaQuaternion);
  }

  update(dt, cameraForward, camera, system) {
    this.planet = system.nearestPlanetTo(this.position);
    const planet = this.planet;
    if (planet) this.applyPlanetCarry(planet);

    const toCenter = new THREE.Vector3().subVectors(planet.center, this.position);
    let distance = toCenter.length();
    this.up.copy(toCenter).multiplyScalar(-1 / distance);

    // Mechs only respond to scrap cores; organic creatures want treats
    const baitSupply = planet.type.baitKind === 'scrap' ? this.scrap : this.treats;
    this.luring = !!this.keys.KeyF && baitSupply > 0;
    const boosting = !!(this.keys.ShiftLeft || this.keys.ShiftRight);
    const forwardTangent = cameraForward.clone().addScaledVector(this.up, -cameraForward.dot(this.up));
    if (forwardTangent.lengthSq() < 1e-6) forwardTangent.set(1, 0, 0);
    forwardTangent.normalize();
    const right = new THREE.Vector3().crossVectors(forwardTangent, this.up);

    let moveX = 0;
    let moveZ = 0;
    if (this.keys.KeyW || this.keys.ArrowUp) moveZ += 1;
    if (this.keys.KeyS || this.keys.ArrowDown) moveZ -= 1;
    if (this.keys.KeyD || this.keys.ArrowRight) moveX += 1;
    if (this.keys.KeyA || this.keys.ArrowLeft) moveX -= 1;

    // Liquid context at the player's current direction from the planet center
    const liquid = planet.type.liquid;
    const liquidClass = planet.type.liquidClass;
    const liquidRadius = liquid ? planet.liquidRadius() : 0;
    const terrainRadius = liquid ? planet.heightAtWorldDirection(this.up) : 0;
    const overDeepLiquid = !!liquid && terrainRadius + 1.2 < liquidRadius;

    // Hazard liquids (lava, acid, void) bounce you out instead of letting you in
    if (liquidClass === 'hazard' && overDeepLiquid && distance < liquidRadius + 0.4) {
      this.position.copy(planet.center).addScaledVector(this.up, liquidRadius + 0.6);
      distance = liquidRadius + 0.6;
      const radial = this.velocity.dot(this.up);
      this.velocity.addScaledVector(this.up, -radial + HAZARD_BOUNCE_SPEED);
      this.grounded = false;
      playBounce();
    }

    const wasSwimming = this.swimming;
    this.swimming = liquidClass === 'swim' && overDeepLiquid && distance < liquidRadius + FLOAT_LINE;
    if (this.swimming && !wasSwimming) playSplash();

    this.jetting = false;

    if (this.swimming) {
      this.grounded = false;
      this.fuel = Math.min(MAX_FUEL, this.fuel + FUEL_RECHARGE * 0.6 * (this.perks.rechargeMult || 1) * dt);

      const moveDirection = new THREE.Vector3()
        .addScaledVector(forwardTangent, moveZ)
        .addScaledVector(right, moveX);
      const swimMult = this.perks.swimMult || 1;
      const moving = moveDirection.lengthSq() > 0;
      if (moving) {
        moveDirection.normalize();
        this.velocity.addScaledVector(moveDirection, SWIM_ACCEL * swimMult * dt);
        this.facing.copy(moveDirection);
      }

      const atSurface = distance > liquidRadius - 0.2;
      if (this.keys.Space) {
        if (atSurface && this.jumpQueued) {
          this.velocity.addScaledVector(this.up, JUMP_SPEED * 0.85);
          this.swimming = false;
        } else {
          this.velocity.addScaledVector(this.up, SWIM_VERTICAL_ACCEL * dt);
        }
      }
      if (this.keys.KeyC) this.velocity.addScaledVector(this.up, -SWIM_VERTICAL_ACCEL * dt);

      // Buoyancy eases you back up to the float line unless you are diving
      const depth = liquidRadius + FLOAT_LINE - distance;
      if (depth > 0.5 && !this.keys.KeyC) {
        this.velocity.addScaledVector(this.up, Math.min(depth, 1.5) * BUOYANCY_ACCEL * dt);
      }

      this.velocity.multiplyScalar(Math.exp(-WATER_DRAG * dt));
      const swimCap = SWIM_SPEED * 2 * swimMult;
      if (this.velocity.length() > swimCap) this.velocity.setLength(swimCap);
      this.walkCycle += dt * (moving ? 7 : 2);
    } else if (this.grounded) {
      this.fuel = Math.min(MAX_FUEL, this.fuel + FUEL_RECHARGE * (this.perks.rechargeMult || 1) * dt);

      const moveDirection = new THREE.Vector3()
        .addScaledVector(forwardTangent, moveZ)
        .addScaledVector(right, moveX);
      const moving = moveDirection.lengthSq() > 0;
      if (moving) moveDirection.normalize();

      const speed = boosting ? RUN_SPEED * (this.perks.runMult || 1) : WALK_SPEED;
      this.velocity.copy(moveDirection).multiplyScalar(moving ? speed : 0);
      if (moving) this.facing.copy(moveDirection);
      this.walkCycle += dt * (moving ? speed * 1.4 : 0);

      if (this.jumpQueued) {
        this.velocity.addScaledVector(this.up, JUMP_SPEED * (this.perks.jumpMult || 1));
        this.grounded = false;
      }
    } else {
      let gravity = Math.max(
        SURFACE_GRAVITY * Math.min(1.5, (planet.radius / distance) ** GRAVITY_FALLOFF_EXPONENT),
        DEEP_SPACE_GRAVITY
      );
      // Mushroom-pet perk: drift down like a spore
      if (this.perks.gravityMult && this.velocity.dot(this.up) < 0) gravity *= this.perks.gravityMult;
      this.velocity.addScaledVector(this.up, -gravity * dt);

      const thrustMultiplier = boosting ? BOOST_MULTIPLIER : 1;
      let burnRate = 0;
      if (this.keys.Space && this.fuel > 0) {
        this.jetting = true;
        this.velocity.addScaledVector(this.up, JET_UP_ACCEL * (this.perks.jetMult || 1) * thrustMultiplier * dt);
        burnRate += FUEL_BURN * (boosting ? BOOST_BURN_MULTIPLIER : 1);
      }
      if ((moveX !== 0 || moveZ !== 0) && this.fuel > 0) {
        const airForward = camera.getWorldDirection(new THREE.Vector3());
        const thrust = new THREE.Vector3()
          .addScaledVector(airForward, moveZ)
          .addScaledVector(right, moveX)
          .normalize()
          .multiplyScalar(JET_THRUST_ACCEL * thrustMultiplier * dt);
        this.velocity.add(thrust);
        burnRate += STEER_BURN;
        this.facing.copy(airForward).addScaledVector(this.up, -airForward.dot(this.up));
        if (this.facing.lengthSq() > 1e-6) this.facing.normalize();
      }
      this.fuel = Math.max(0, this.fuel - burnRate * (this.perks.burnMult || 1) * dt);

      this.velocity.multiplyScalar(Math.exp(-AIR_DRAG * dt));
      const speedCap = boosting ? BOOST_SPEED_CAP * (this.perks.boostCapMult || 1) : AIR_SPEED_CAP;
      if (this.velocity.length() > speedCap) this.velocity.setLength(speedCap);
    }
    this.jumpQueued = false;

    this.position.addScaledVector(this.velocity, dt);

    // Collision against the real terrain mesh (raycast through the BVH)
    const fromCenter = new THREE.Vector3().subVectors(this.position, planet.center);
    const newDistance = fromCenter.length();
    const direction = fromCenter.divideScalar(newDistance);
    const groundHeight = planet.heightAtWorldDirection(direction) + GROUND_OFFSET;

    if (this.grounded) {
      if (newDistance < groundHeight + 0.6) {
        this.position.copy(planet.center).addScaledVector(direction, groundHeight);
        const radial = this.velocity.dot(direction);
        this.velocity.addScaledVector(direction, -radial);
      } else {
        this.grounded = false;
      }
    } else if (newDistance < groundHeight) {
      this.position.copy(planet.center).addScaledVector(direction, groundHeight);
      const radial = this.velocity.dot(direction);
      if (radial < 0) this.velocity.addScaledVector(direction, -radial);
      this.grounded = !this.swimming;
    }

    setJetpack(this.jetting, boosting);
    this.updateVisuals(dt, planet, groundHeight, boosting);
  }

  updateVisuals(dt, planet, groundHeight, boosting) {
    this.character.position.copy(this.position).addScaledVector(this.up, -GROUND_OFFSET);

    const forward = this.facing.clone().addScaledVector(this.up, -this.facing.dot(this.up));
    if (forward.lengthSq() < 1e-6) forward.set(0, 0, 1);
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(this.up, forward);
    const targetRotation = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().makeBasis(right, this.up, forward)
    );
    this.character.quaternion.slerp(targetRotation, 1 - Math.exp(-12 * dt));

    const swingAmount = this.grounded ? 0.55 : 0.2;
    for (const { pivot, arm, side } of this.limbs) {
      const phase = arm ? this.walkCycle + side * Math.PI : this.walkCycle + (side > 0 ? Math.PI : 0);
      pivot.rotation.x = Math.sin(phase) * swingAmount;
    }

    this.jetGlow.material.opacity = this.jetting ? (boosting ? 0.95 : 0.6) : Math.max(0, this.jetGlow.material.opacity - dt * 4);
    this.jetGlow.scale.y = boosting ? 1.8 : 1;

    // Blob shadow projected straight down onto the terrain
    const altitude = this.position.distanceTo(planet.center) - groundHeight;
    const shadowOpacity = Math.max(0, 0.32 * (1 - altitude / 8));
    this.shadow.visible = shadowOpacity > 0.01;
    if (this.shadow.visible) {
      const direction = new THREE.Vector3().subVectors(this.position, planet.center).normalize();
      const surfacePoint = planet.center.clone().addScaledVector(direction, groundHeight - GROUND_OFFSET + 0.1);
      this.shadow.position.copy(surfacePoint);
      this.shadow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
      this.shadow.material.opacity = shadowOpacity;
    }
  }
}
