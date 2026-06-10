let context = null;
let jetGain = null;
let jetFilter = null;

function ensureContext() {
  if (context) return context;
  context = new (window.AudioContext || window.webkitAudioContext)();

  const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const samples = noiseBuffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;

  const noiseSource = context.createBufferSource();
  noiseSource.buffer = noiseBuffer;
  noiseSource.loop = true;

  jetFilter = context.createBiquadFilter();
  jetFilter.type = 'bandpass';
  jetFilter.frequency.value = 400;
  jetFilter.Q.value = 0.8;

  jetGain = context.createGain();
  jetGain.gain.value = 0;

  noiseSource.connect(jetFilter).connect(jetGain).connect(context.destination);
  noiseSource.start();
  return context;
}

export function initAudio() {
  ensureContext();
  if (context.state === 'suspended') context.resume();
}

export function playChime() {
  if (!context) return;
  const now = context.currentTime;
  const notes = [880, 1174.66, 1567.98];
  notes.forEach((frequency, i) => {
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = 'triangle';
    osc.frequency.value = frequency;
    const start = now + i * 0.07;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);
    osc.connect(gain).connect(context.destination);
    osc.start(start);
    osc.stop(start + 0.5);
  });
}

export function playWarp() {
  if (!context) return;
  const now = context.currentTime;
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(120, now);
  osc.frequency.exponentialRampToValueAtTime(900, now + 0.5);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
  osc.connect(gain).connect(context.destination);
  osc.start(now);
  osc.stop(now + 0.8);
}

export function setJetpack(active, boosting) {
  if (!context || !jetGain) return;
  const now = context.currentTime;
  const targetGain = active ? (boosting ? 0.12 : 0.06) : 0;
  const targetFrequency = boosting ? 900 : 420;
  jetGain.gain.setTargetAtTime(targetGain, now, 0.08);
  jetFilter.frequency.setTargetAtTime(targetFrequency, now, 0.15);
}
