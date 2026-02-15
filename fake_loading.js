(() => {
  if (localStorage.getItem("loadingOverlaySkipped") === "true") return;

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
  document.head.appendChild(font);

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: #0f0f12;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    transition: opacity 0.6s ease;
  `;

  const container = document.createElement("div");
  container.style.cssText = `
    text-align: center;
    color: #e6e6e6;
  `;

  const title = document.createElement("div");
  title.style.cssText = `
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
  `;

  const img = document.createElement("img");
  img.src = "https://escrub.astrarune.com/zandovo_emojiscrub.png";
  img.style.cssText = `
    width: 200px;
    height: auto;
  `;
  title.appendChild(img);

  const subtitle = document.createElement("div");
  subtitle.textContent = "Loading Scripts.";
  subtitle.style.cssText = `
    margin-top: 6px;
    font-size: 14px;
    opacity: 0.6;
  `;

  const percentText = document.createElement("div");
  percentText.textContent = "0%";
  percentText.style.cssText = `
    margin-top: 6px;
    font-size: 13px;
    opacity: 0.4;
  `;

  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Skip";
  skipBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 8px 14px;
    background: #ffffff;
    color: #000000;
    border: none;
    border-radius: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  `;

  skipBtn.onclick = () => {
    localStorage.setItem("loadingOverlaySkipped", "true");
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 600);
  };

  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(percentText);
  overlay.appendChild(skipBtn);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  const steps = [
    ["Loading Scripts.", 120],
    ["Loading CSS", 500],
    ["Loading Account System", 800],
    ["Generating random Puzzle...", 5],
    ["Checking Accounts...", 500],
    ["Polishing up...", 892],
    ["Fixing some stuff..", 50],
    ["Loading Electron version...", 150],
    ["Loading Announcements", 1],
    ["Loading Twemoji...", 1500],
    ["Loading Setup...", 1000],
    ["Loading Data...", 5],
    ["Loading Setup Data...", 10],
    ["Polishing Up...", 52],
    ["Communicating to Verification", 2],
    ["Loading GitHub", 2],
    ["Communicating to Cloudflare...", 12],
    ["Checking Javascript...", 3],
  ];

  // Total time of all steps for smooth percentage calculation
  const totalTime = steps.reduce((acc, step) => acc + step[1], 0);

  let elapsedTime = 0;

  const step = ([text, time]) =>
    new Promise(resolve => {
      subtitle.textContent = text;
      const startPercent = Math.floor((elapsedTime / totalTime) * 100);
      elapsedTime += time;
      const endPercent = Math.floor((elapsedTime / totalTime) * 100);

      const duration = time;
      const startTime = performance.now();

      function animate(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const currentPercent = Math.floor(startPercent + (endPercent - startPercent) * progress);
        percentText.textContent = currentPercent + "%";

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(animate);
    });

  (async () => {
    for (const s of steps) {
      await step(s);
    }

    subtitle.textContent = "Loaded, enjoy playing.";
    percentText.textContent = "100%";

    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 600);
    }, 400);
  })();
})();
