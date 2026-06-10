import * as THREE from 'three';

const LOOK_SENSITIVITY = 0.0024;
const MIN_PITCH = -0.6;
const MAX_PITCH = 1.25;
const MIN_DISTANCE = 4;
const MAX_DISTANCE = 20;

export class CameraRig {
  constructor(camera, domElement) {
    this.camera = camera;
    this.forward = new THREE.Vector3(0, 0, -1);
    this.pitch = 0.32;
    this.distance = 9;
    this.targetDistance = 9;
    this.pendingYaw = 0;
    this.pendingPitch = 0;

    domElement.addEventListener('mousemove', (event) => {
      if (document.pointerLockElement !== domElement) return;
      this.pendingYaw += event.movementX * LOOK_SENSITIVITY;
      this.pendingPitch += event.movementY * LOOK_SENSITIVITY;
    });
    domElement.addEventListener('wheel', (event) => {
      this.targetDistance = THREE.MathUtils.clamp(this.targetDistance + event.deltaY * 0.01, MIN_DISTANCE, MAX_DISTANCE);
    }, { passive: true });
  }

  update(dt, player, system) {
    const up = player.up;

    this.forward.addScaledVector(up, -this.forward.dot(up));
    if (this.forward.lengthSq() < 1e-6) {
      this.forward.set(up.y, up.z, up.x).cross(up);
    }
    this.forward.normalize();

    if (this.pendingYaw !== 0) {
      this.forward.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(up, -this.pendingYaw));
      this.pendingYaw = 0;
    }
    this.pitch = THREE.MathUtils.clamp(this.pitch + this.pendingPitch, MIN_PITCH, MAX_PITCH);
    this.pendingPitch = 0;
    this.distance += (this.targetDistance - this.distance) * (1 - Math.exp(-8 * dt));

    const head = player.position.clone().addScaledVector(up, 0.8);
    const cameraPosition = head.clone()
      .addScaledVector(this.forward, -Math.cos(this.pitch) * this.distance)
      .addScaledVector(up, Math.sin(this.pitch) * this.distance);

    // Keep the camera above the terrain of whichever planet it is closest to
    const planet = system.nearestPlanetTo(cameraPosition);
    if (planet) {
      const fromCenter = cameraPosition.clone().sub(planet.center);
      const cameraDistance = fromCenter.length();
      const minHeight = planet.heightAtWorldDirection(fromCenter.clone().normalize()) + 0.7;
      if (cameraDistance < minHeight) {
        cameraPosition.copy(planet.center).addScaledVector(fromCenter.normalize(), minHeight);
      }
    }

    this.camera.position.copy(cameraPosition);
    this.camera.up.copy(up);
    this.camera.lookAt(head);
  }
}
