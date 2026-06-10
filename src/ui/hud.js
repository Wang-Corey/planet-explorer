export class Hud {
  constructor() {
    this.planetName = document.getElementById('planet-name');
    this.planetType = document.getElementById('planet-type');
    this.discTotal = document.getElementById('disc-total');
    this.discPlanet = document.getElementById('disc-planet');
    this.banner = document.getElementById('banner');
    this.toasts = document.getElementById('toasts');
    this.logPanel = document.getElementById('log-panel');
    this.logEntries = document.getElementById('log-entries');
    this.hint = document.getElementById('controls-hint');
    this.fuelWrap = document.getElementById('fuel-wrap');
    this.fuelBar = document.getElementById('fuel-bar');
    this.liquidTint = document.getElementById('liquid-tint');
    this.petName = document.getElementById('pet-name');
    this.petPerk = document.getElementById('pet-perk');
    this.treatCount = document.getElementById('treat-count');
    this.bannerTimer = null;
    this.discoveries = new Map();
    this.pets = [];
    this.activePetIndex = -1;

    setTimeout(() => this.hint.classList.add('faded'), 14000);
  }

  setPlanet(planet) {
    this.planetName.textContent = planet.name;
    this.planetType.textContent = planet.type.label;
  }

  showBanner(planet) {
    this.banner.querySelector('.b-name').textContent = planet.name;
    this.banner.querySelector('.b-type').textContent = planet.type.label;
    this.banner.classList.add('show');
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => this.banner.classList.remove('show'), 3000);
  }

  updateCounts(totalCollected, totalAvailable, planet) {
    this.discTotal.textContent = `${totalCollected} / ${totalAvailable}`;
    this.discPlanet.textContent = `This planet: ${planet.discoveredCount()} / ${planet.totalDiscoveryCount()}`;
  }

  setFuel(fraction) {
    this.fuelBar.style.width = `${Math.round(fraction * 100)}%`;
    this.fuelBar.classList.toggle('low', fraction < 0.25);
    this.fuelWrap.classList.toggle('full', fraction > 0.999);
  }

  setTreats(count) {
    this.treatCount.innerHTML = `Treats: ${count} · hold <span>F</span> near a creature`;
  }

  setActivePet(pet, perkLabel) {
    if (pet) {
      this.petName.textContent = pet.species;
      this.petPerk.textContent = perkLabel || 'Loyal companion';
    } else {
      this.petName.textContent = 'No pet';
      this.petPerk.textContent = 'Feed a creature a treat to tame it';
    }
  }

  setPetCollection(pets, activeIndex) {
    this.pets = pets;
    this.activePetIndex = activeIndex;
    this.renderLog();
  }

  setLiquidTint(color) {
    if (color) {
      this.liquidTint.style.background = color;
      this.liquidTint.style.opacity = 0.35;
    } else {
      this.liquidTint.style.opacity = 0;
    }
  }

  addDiscovery(planet, itemName) {
    const key = planet.name;
    if (!this.discoveries.has(key)) {
      this.discoveries.set(key, { typeLabel: planet.type.label, items: [] });
    }
    this.discoveries.get(key).items.push(itemName);
    this.renderLog();
    this.showToast('Discovered', itemName);
  }

  showToast(prefix, highlight) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `${prefix} <b></b>`;
    toast.querySelector('b').textContent = highlight;
    this.toasts.appendChild(toast);
    setTimeout(() => toast.remove(), 3300);
  }

  renderLog() {
    this.logEntries.innerHTML = '';

    if (this.pets.length > 0) {
      const section = document.createElement('div');
      section.className = 'log-planet log-pets';
      const heading = document.createElement('h3');
      heading.textContent = `Pets (${this.pets.length})`;
      const hint = document.createElement('small');
      hint.textContent = 'P to cycle';
      heading.appendChild(hint);
      const list = document.createElement('ul');
      this.pets.forEach((pet, index) => {
        const row = document.createElement('li');
        row.textContent = `${pet.species} — from ${pet.origin}`;
        if (index === this.activePetIndex) row.className = 'active-pet';
        list.appendChild(row);
      });
      section.appendChild(heading);
      section.appendChild(list);
      this.logEntries.appendChild(section);
    }

    if (this.discoveries.size === 0) {
      const empty = document.createElement('div');
      empty.className = 'log-empty';
      empty.textContent = 'Nothing discovered yet. Glowing artifacts await on every planet…';
      this.logEntries.appendChild(empty);
      return;
    }
    for (const [planetName, entry] of this.discoveries) {
      const section = document.createElement('div');
      section.className = 'log-planet';
      const heading = document.createElement('h3');
      heading.textContent = planetName;
      const typeTag = document.createElement('small');
      typeTag.textContent = entry.typeLabel;
      heading.appendChild(typeTag);
      const list = document.createElement('ul');
      for (const item of entry.items) {
        const row = document.createElement('li');
        row.textContent = item;
        list.appendChild(row);
      }
      section.appendChild(heading);
      section.appendChild(list);
      this.logEntries.appendChild(section);
    }
  }

  toggleLog() {
    this.logPanel.classList.toggle('open');
  }

  reset() {
    this.discoveries.clear();
    this.renderLog();
    this.logPanel.classList.remove('open');
  }
}
