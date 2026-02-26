// REWRITE AGAIN BRUH
const AUDIO_URL = "bgm.mp3";

const settingsBtn = document.getElementById("settingsBtn");
const bgMusic = new Audio(AUDIO_URL);
bgMusic.loop = true;

const overlay = document.createElement("div");
overlay.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .7);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
`;

const panel = document.createElement("div");
panel.id = "settingsPanel";
panel.style.cssText = `
  background: #0f0f12;
  color: #fff;
  width: 550px;
  min-height: 380px;
  display: flex;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: scale(0.95);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
`;

panel.innerHTML = `
  <div class="tabs-nav">
    <div class="nav-header">Settings</div>
    <div class="tab-link active" data-tab="appearance">
        <span>Appearance</span>
        <svg class="tab-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5 11 5.67 11 6.5 10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    </div>
    <div class="tab-link" data-tab="music">
        <span>Audio</span>
        <svg class="tab-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19V5l12-2v14M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM21 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/></svg>
    </div>
    <div class="tab-link danger-tab" data-tab="danger">
        <span>Danger Zone</span>
        <svg class="tab-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
    </div>
  </div>

  <div class="content-area">
    <div class="content-header">
        <button id="closeSettings">✕</button>
    </div>

    <div class="tab-content active" id="appearance">
        <div class="setting-item" data-setting="twemoji">
          <div class="setting-text">
            <div class="setting-label">Disable Twemoji</div>
            <div class="setting-desc">Use system default emojis.</div>
          </div>
          <input type="checkbox" id="disableTwemoji">
        </div>
        <div class="setting-item" data-setting="darkMode">
          <div class="setting-text">
            <div class="setting-label">Dark Mode</div>
            <div class="setting-desc">Switch between light and dark themes.</div>
          </div>
          <input type="checkbox" id="enableDarkMode">
        </div>
    </div>

    <div class="tab-content" id="music">
        <div class="setting-item" data-setting="typing">
          <div class="setting-text">
            <div class="setting-label">Disable Typing Sounds</div>
            <div class="setting-desc">Silence the keyboard feedback.</div>
          </div>
          <input type="checkbox" id="disableTyping">
        </div>
        <div class="setting-item" data-setting="bgm">
          <div class="setting-text">
            <div class="setting-label">Background Music</div>
            <div class="setting-desc">Play a chill lo-fi loop.</div>
          </div>
          <input type="checkbox" id="enableBgm">
        </div>
    </div>

    <div class="tab-content" id="danger">
        <div style="background: rgba(255, 77, 77, 0.1); padding: 15px; border-radius: 8px; border: 1px solid rgba(255, 77, 77, 0.2);">
            <p style="font-size: 13px; color: #ff4d4d; margin: 0 0 15px 0;">This will clear all local data and refresh the page.</p>
            <button id="resetSettings">Reset All Data</button>
        </div>
    </div>

    <div class="footer-note">Changes are saved automatically.</div>
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  .tabs-nav { width: 180px; background: rgba(255, 255, 255, 0.02); border-right: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; padding: 15px; }
  .nav-header { padding: 10px; font-size: 18px; font-weight: 800; color: #fff; letter-spacing: 0.5px; margin-bottom: 10px; }
  .content-area { flex: 1; padding: 20px 25px; display: flex; flex-direction: column; }
  .content-header { text-align: right; }
  #closeSettings { background: none; border: none; color: #fff; font-size: 20px; cursor: pointer; opacity: 0.5; transition: 0.2s; }
  #closeSettings:hover { opacity: 1; transform: rotate(90deg); }

  .tab-link { display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; border-radius: 10px; cursor: pointer; font-size: 14px; margin-bottom: 6px; transition: 0.2s; color: rgba(255,255,255,0.5); }
  .tab-link:hover { background: rgba(255,255,255,0.05); color: #fff; }
  .tab-link.active { background: #fff; color: #000; font-weight: 600; }
  .tab-icon { width: 18px; height: 18px; }
  .danger-tab:hover { color: #ff4d4d !important; }

  .tab-content { display: none; animation: slideIn 0.3s ease; }
  .tab-content.active { display: block; }
  @keyframes slideIn { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }

  .setting-item { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; }
  .setting-label { font-size: 14px; font-weight: 500; }
  .setting-desc { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }
  .setting-item input { accent-color: #fff; width: 18px; height: 18px; cursor: pointer; }

  .footer-note { margin-top: auto; padding-top: 20px; font-size: 11px; color: #f5d742; text-align: center; opacity: 0.6; }

  #resetSettings { width: 100%; background: #ff4d4d; color: #fff; border: none; padding: 12px; border-radius: 8px; cursor: pointer; font-weight: 700; transition: 0.2s; }
  #resetSettings:hover { background: #ff3333; box-shadow: 0 4px 15px rgba(255, 77, 77, 0.3); }

  body.dark-mode { background-color: #0a0a0c !important; color: #eeeeee !important; }
  body.dark-mode p, body.dark-mode span, body.dark-mode h1, body.dark-mode h2 { color: #eeeeee !important; }
  body.dark-mode div:not(#settingsPanel):not(.setting-item) { border-color: rgba(255,255,255,0.1); }
`;

document.head.appendChild(style);
overlay.appendChild(panel);
document.body.appendChild(overlay);

const settingsList = ["disableTyping", "disableTwemoji", "enableBgm", "darkMode"];

const loadSettings = () => {
    settingsList.forEach(key => {
        const val = localStorage.getItem(key) === "true";
        const input = document.getElementById(key === "darkMode" ? "enableDarkMode" : (key === "enableBgm" ? "enableBgm" : (key === "disableTwemoji" ? "disableTwemoji" : "disableTyping")));
        if (input) input.checked = val;
        
        if (key === "darkMode" && val) document.body.classList.add('dark-mode');
        if (key === "enableBgm" && val) {
            bgMusic.play().catch(() => console.log("User interaction needed for audio"));
        }
    });
};

const handleToggle = (settingId, storageKey, callback) => {
    const item = panel.querySelector(`[data-setting="${settingId}"]`);
    item.addEventListener("click", () => {
        const checkbox = item.querySelector('input');
        checkbox.checked = !checkbox.checked;
        localStorage.setItem(storageKey, checkbox.checked);
        if (callback) callback(checkbox.checked);
    });
};

panel.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", () => {
        panel.querySelectorAll(".tab-link, .tab-content").forEach(el => el.classList.remove("active"));
        link.classList.add("active");
        panel.querySelector(`#${link.dataset.tab}`).classList.add("active");
    });
});

const openPanel = () => {
    overlay.style.display = "flex";
    setTimeout(() => {
        overlay.style.opacity = 1;
        panel.style.opacity = 1;
        panel.style.transform = "scale(1)";
    }, 10);
};

const closePanel = () => {
    overlay.style.opacity = 0;
    panel.style.transform = "scale(0.95)";
    setTimeout(() => overlay.style.display = "none", 300);
};

settingsBtn.addEventListener("click", openPanel);
panel.querySelector("#closeSettings").addEventListener("click", closePanel);
overlay.addEventListener("click", e => e.target === overlay && closePanel());

handleToggle("twemoji", "disableTwemoji");
handleToggle("typing", "disableTyping");
handleToggle("bgm", "enableBgm", (isOn) => {
    isOn ? bgMusic.play() : bgMusic.pause();
});
handleToggle("darkMode", "darkMode", (isOn) => {
    document.body.classList.toggle('dark-mode', isOn);
});

panel.querySelector("#resetSettings").addEventListener("click", () => {
    settingsList.forEach(s => localStorage.removeItem(s));
    location.reload();
});

loadSettings();
