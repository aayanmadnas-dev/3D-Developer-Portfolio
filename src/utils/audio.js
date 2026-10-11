// Web Audio API Procedural Sound Synthesizer (No external assets required)
let audioCtx = null;
let soundEnabled = false;

export const toggleSound = () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (soundEnabled) {
    playTone(587.33, 0.08, 'sine'); // D5 feedback tone
  }
  return soundEnabled;
};

export const isSoundEnabled = () => soundEnabled;

export const playTone = (freq = 440, duration = 0.05, type = 'sine', gainVal = 0.04) => {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Graceful fallback if audio is blocked by browser policy
  }
};

export const playClick = () => playTone(880, 0.04, 'triangle', 0.03);
export const playHover = () => playTone(440, 0.03, 'sine', 0.015);
export const playSuccess = () => {
  if (!soundEnabled) return;
  playTone(523.25, 0.08, 'sine', 0.05);
  setTimeout(() => playTone(659.25, 0.08, 'sine', 0.05), 80);
  setTimeout(() => playTone(783.99, 0.12, 'sine', 0.05), 160);
};
