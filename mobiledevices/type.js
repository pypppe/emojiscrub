document.addEventListener("DOMContentLoaded", async () => {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const context = new AudioCtx();
  let audioBuffer;

  const response = await fetch("mobiledevices/type.wav");
  const arrayBuffer = await response.arrayBuffer();
  audioBuffer = await context.decodeAudioData(arrayBuffer);

  const unlock = () => {
    if (context.state === "suspended") {
      context.resume();
    }
    document.removeEventListener("touchstart", unlock);
  };
  document.addEventListener("touchstart", unlock, { once: true });

  const playSound = () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = 0.9 + Math.random() * 0.2;

    const gainNode = context.createGain();
    gainNode.gain.value = 4.5;

    source.connect(gainNode).connect(context.destination);
    source.start();
  };

  document.querySelectorAll("input[type='text'], textarea").forEach(el => {
    el.addEventListener("input", () => {
      playSound();
    });
  });
});
