document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.getItem("disableTyping") === "true") return;

  const context = new (window.AudioContext || window.webkitAudioContext)();
  let audioBuffer;

  const response = await fetch("type.wav");
  const arrayBuffer = await response.arrayBuffer();
  audioBuffer = await context.decodeAudioData(arrayBuffer);

  const playSound = () => {
    if (localStorage.getItem("disableTyping") === "true") return;

    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = 0.9 + Math.random() * 0.2;

    const gainNode = context.createGain();
    const vol = parseFloat(localStorage.getItem("mainVolume") || "1.0");
gainNode.gain.value = 4.5 * vol;
    
    source.connect(gainNode).connect(context.destination);
    source.start(0);
  };

  document.querySelectorAll("input[type='text'], textarea").forEach(el => {
    el.addEventListener("keydown", event => {
      if (event.key.length === 1) {
        playSound();
      }
    });
  });
});
