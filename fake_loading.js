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
  img.src = "https://escrub.astrarune.com/zandovo.png";
  img.style.cssText = `
    width: 200px;  /* adjust size as needed */
    height: auto;
  `;
  title.appendChild(img);

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
    localStorage.setItem("loadingOverlaySkipped", "true");

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
    await step("Loading Scripts.", 120);
    await step("Loading CSS", 500);
    await step("Loading Account System", 800);
    await step("Generating random Puzzle...", 5);
    await step("Checking Accounts...", 500);
    await step("Polishing up...", 892);
    await step("Fixing some stuff..", 50);
    await step("Loading Electron version...", 150);
    await step("Loading Announcements", 1);
    await step("Loading Twemoji...", 1500);
    await step("Loading Setup...", 1000);
    await step("Loading Data...", 5);
    await step("Loading Setup Data...", 10);
    await step("Polishing Up...", 52);
    await step("Communicating to Verification", 2);
    await step("Loading GitHub", 2);
    await step("Communicating to Cloudflare...", 12);
    await step("Checking Javascript...", 3);

    subtitle.textContent = "Loaded, enjoy playing.";

    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 600);
    }, 400);
  })();
})();
