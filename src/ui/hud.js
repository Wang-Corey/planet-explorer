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
    this.bannerTimer = null;
    this.discoveries = new Map();

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
    this.discPlanet.textContent = `This planet: ${planet.collectedCount} / ${planet.collectibles.length}`;
  }

  addDiscovery(planet, itemName) {
    const key = planet.name;
    if (!this.discoveries.has(key)) {
      this.discoveries.set(key, { typeLabel: planet.type.label, items: [] });
    }
    this.discoveries.get(key).items.push(itemName);
    this.renderLog();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `Discovered <b></b>`;
    toast.querySelector('b').textContent = itemName;
    this.toasts.appendChild(toast);
    setTimeout(() => toast.remove(), 3300);
  }

  renderLog() {
    if (this.discoveries.size === 0) {
      this.logEntries.innerHTML = '<div class="log-empty">Nothing discovered yet. Glowing artifacts await on every planet…</div>';
      return;
    }
    this.logEntries.innerHTML = '';
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
