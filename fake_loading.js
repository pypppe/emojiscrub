(() => {
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
  title.textContent = "Loading...";
  title.style.cssText = `
    font-size: 28px;
    font-weight: 600;
  `;

  const subtitle = document.createElement("div");
  subtitle.textContent = "Loading Scripts.";
  subtitle.style.cssText = `
    margin-top: 6px;
    font-size: 14px;
    opacity: 0.5;
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
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 600);
  };

  container.appendChild(title);
  container.appendChild(subtitle);
  overlay.appendChild(skipBtn);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  const step = (text, time) =>
    new Promise(resolve => {
      subtitle.textContent = text;
      setTimeout(resolve, time);
    });

  (async () => {
    await step("Loading Scripts.", 300);
    await step("Loading CSS", 600);
    await step("Loading Account System", 200);
    await step("Generating random Puzzle...", 100);
    await step("Checking Accounts...", 600);
    await step("Polishing up...", 600);
    await step("Fixing some stuff..", 600);
    await step("Loading Unity version...", 200);
    await step("Loading Twemoji...", 3000);

    subtitle.textContent = "Loaded, enjoy playing.";

    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 600);
    }, 400);
  })();
})();
