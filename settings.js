// u cant be fr rn
const settingsBtn = document.getElementById("settingsBtn");

const bgMusic = new Audio("bgm.mp3");
bgMusic.loop = true;

const overlay = document.createElement("div");
overlay.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .8);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  opacity: 0;
  transition: opacity 0.2s ease;
  backdrop-filter: blur(8px);
`;

const panel = document.createElement("div");
panel.id = "settingsPanel";
panel.style.cssText = `
  background: #0f0f12;
  color: #fff;
  width: 550px;
  min-height: 400px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  transform: scale(0.95);
  transition: all 0.25s ease;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  user-select: none;
`;

panel.innerHTML = `
  <div class="tabs-nav">
    <div class="nav-header">Settings</div>
    <div class="tab-link active" data-tab="appearance">Appearance</div>
    <div class="tab-link" data-tab="music">Audio</div>
    <div class="tab-link danger-tab" data-tab="danger">Danger Zone</div>
  </div>

  <div class="content-area">
    <div class="content-header">
        <button id="closeSettings">✕</button>
    </div>

    <div class="tab-content active" id="appearance">
        <div class="setting-item" data-id="disableTwemoji">
          <div class="setting-text">
            <div class="setting-label">Disable Twemoji</div>
            <div class="setting-desc">Use system default emojis.</div>
          </div>
          <input type="checkbox" id="disableTwemoji">
        </div>
    </div>

    <div class="tab-content" id="music">
        <div class="setting-item" data-id="disableTyping">
          <div class="setting-text">
            <div class="setting-label">Disable Typing Sounds</div>
            <div class="setting-desc">Mute keyboard sound effects.</div>
          </div>
          <input type="checkbox" id="disableTyping">
        </div>
        <div class="setting-item" data-id="enableBgm">
          <div class="setting-text">
            <div class="setting-label">Background Music</div>
            <div class="setting-desc">Toggle music.</div>
          </div>
          <input type="checkbox" id="enableBgm">
        </div>
        <div class="setting-item" data-id="mainVolume">
          <div class="setting-text">
            <div class="setting-label">Main Audio</div>
            <div class="setting-desc">Change how loud the clicking, typing & answers are.</div>
          </div>
          <button id="volumeBtn" style="background: rgba(255,255,255,0.1); color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; min-width: 50px;">1.0</button>
        </div>
    </div>

    <div class="tab-content" id="danger">
        <div style="background: rgba(255, 77, 77, 0.1); padding: 15px; border-radius: 8px;">
            <p style="font-size: 13px; color: #ff4d4d; margin-bottom: 15px;">Clear all data and reload?</p>
            <button id="resetSettings">Reset Data</button>
        </div>
    </div>

    <div class="footer-note">All changes sync automatically.</div>
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  .tabs-nav { width: 160px; background: rgba(255, 255, 255, 0.02); border-right: 1px solid rgba(255, 255, 255, 0.05); display: flex; flex-direction: column; padding: 20px 10px; }
  .nav-header { padding: 0 10px 20px; font-size: 18px; font-weight: 700; color: #fff; }
  .content-area { flex: 1; padding: 20px 25px; display: flex; flex-direction: column; position: relative; }
  #closeSettings { background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; position: absolute; top: 15px; right: 20px; opacity: 0.5; }
  
  .tab-link { padding: 12px 15px; border-radius: 8px; cursor: pointer; font-size: 14px; margin-bottom: 5px; color: rgba(255,255,255,0.5); transition: 0.2s; }
  .tab-link:hover { background: rgba(255,255,255,0.05); color: #fff; }
  .tab-link.active { background: #fff; color: #000; font-weight: 600; }
  .danger-tab { color: #ff4d4d !important; margin-top: auto; }

  .tab-content { display: none; }
  .tab-content.active { display: block; }

  .setting-item { display: flex; justify-content: space-between; align-items: center; padding: 15px 10px; border-radius: 8px; margin-bottom: 5px; cursor: pointer; transition: background 0.2s; }
  .setting-item:hover { background: rgba(255,255,255,0.04); }
  .setting-label { font-size: 14px; font-weight: 500; pointer-events: none; }
  .setting-desc { font-size: 11px; color: rgba(255,255,255,0.4); pointer-events: none; }
  .setting-item input { pointer-events: none; accent-color: #fff; width: 18px; height: 18px; }

  .footer-note { margin-top: auto; font-size: 11px; color: #f5d742; text-align: center; opacity: 0.6; }
  #resetSettings { width: 100%; background: #ff4d4d; color: #fff; border: none; padding: 12px; border-radius: 6px; font-weight: 700; cursor: pointer; }

  /* DARK MODE GLOBAL OVERRIDES */
  body.dark-mode, body.dark-mode * :not(#settingsPanel *) { 
    background-color: #0a0a0c !important; 
    color: #f0f0f0 !important; 
    border-color: #333 !important;
  }
`;

document.head.appendChild(style);
overlay.appendChild(panel);
document.body.appendChild(overlay);

const state = {
  disableTwemoji: localStorage.getItem("disableTwemoji") === "true",
  enableDarkMode: localStorage.getItem("darkMode") === "true",
  disableTyping: localStorage.getItem("disableTyping") === "true",
  enableBgm: localStorage.getItem("enableBgm") === "true",
  mainVolume: localStorage.getItem("mainVolume") || "1.0"
};

const volumeLevels = ["1.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"];

const applySettings = () => {
  document.body.classList.toggle("dark-mode", state.enableDarkMode);
  
  if (state.enableBgm) {
    bgMusic.play().catch(() => console.warn("Audio interaction required"));
  } else {
    bgMusic.pause();
  }

  document.querySelectorAll('.setting-item input').forEach(input => {
    const id = input.id;
    if (id === "enableDarkMode") input.checked = state.enableDarkMode;
    else if (id === "enableBgm") input.checked = state.enableBgm;
    else if (id === "disableTwemoji") input.checked = state.disableTwemoji;
    else if (id === "disableTyping") input.checked = state.disableTyping;
  });

  const vol = parseFloat(state.mainVolume);
document.querySelectorAll("audio").forEach(audio => {
  audio.volume = vol;
});
};

panel.addEventListener("click", (e) => {
  const item = e.target.closest(".setting-item");
  if (!item) return;

  const id = item.dataset.id;

  if (id === "mainVolume") return;

  const checkbox = item.querySelector("input");
  const newValue = !checkbox.checked;
  checkbox.checked = newValue;
  
  if (id === "enableDarkMode") {
    state.enableDarkMode = newValue;
    localStorage.setItem("darkMode", newValue);
  } else if (id === "enableBgm") {
    state.enableBgm = newValue;
    localStorage.setItem("enableBgm", newValue);
  } else if (id === "disableTwemoji") {
    state.disableTwemoji = newValue;
    localStorage.setItem("disableTwemoji", newValue);
  } else if (id === "disableTyping") {
    state.disableTyping = newValue;
    localStorage.setItem("disableTyping", newValue);
  }
  
  applySettings();
});

const volumeBtn = panel.querySelector("#volumeBtn");
volumeBtn.textContent = state.mainVolume;
volumeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentIndex = volumeLevels.indexOf(state.mainVolume);
  const nextIndex = (currentIndex + 1) % volumeLevels.length;
  state.mainVolume = volumeLevels[nextIndex];
  volumeBtn.textContent = state.mainVolume;
  localStorage.setItem("mainVolume", state.mainVolume);
  applySettings();
});

panel.querySelectorAll(".tab-link").forEach(link => {
  link.onclick = () => {
    panel.querySelectorAll(".tab-link, .tab-content").forEach(el => el.classList.remove("active"));
    link.classList.add("active");
    panel.querySelector(`#${link.dataset.tab}`).classList.add("active");
  };
});

const toggleModal = (show) => {
  overlay.style.display = show ? "flex" : "none";
  setTimeout(() => {
    overlay.style.opacity = show ? 1 : 0;
    panel.style.transform = show ? "scale(1)" : "scale(0.95)";
  }, 10);
};

if (settingsBtn) settingsBtn.onclick = () => toggleModal(true);

const topbarSettingsBtn = document.getElementById("topbarSettingsBtn");
if (topbarSettingsBtn) topbarSettingsBtn.onclick = () => toggleModal(true);

panel.querySelector("#closeSettings").onclick = () => toggleModal(false);
overlay.onclick = (e) => e.target === overlay && toggleModal(false);

panel.querySelector("#resetSettings").onclick = () => {
  localStorage.clear();
  location.reload();
};

applySettings();
