const settingsBtn = document.getElementById("settingsBtn");

const overlay = document.createElement("div");
overlay.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .55);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  touch-action: manipulation;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const panel = document.createElement("div");
panel.id = "settingsPanel";
panel.style.cssText = `
  background: #0f0f12;
  color: #fff;
  width: 320px;
  padding: 18px;
  font-family: Poppins, sans-serif;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .6);
  user-select: none;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 8px;
`;

panel.innerHTML = `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
    <span style="font-size:18px;font-weight:600;">Settings</span>
    <button id="closeSettings" style="background:none;border:none;padding:0;cursor:pointer;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>

  <div class="tabs-nav">
    <div class="tab-link active" data-tab="appearance">
        Appearance 
        <svg class="tab-icon" fill="#ffffff" viewBox="0 0 50 50"><path d="M21.211 6c-12.632 0-20.211 10.133-20.211 15.2s2.526 8.867 7.579 8.867 7.58 1.266 7.58 5.066c0 5.066 3.789 8.866 8.842 8.866 16.422 0 24-8.866 24-17.732-.001-15.2-12.635-20.267-27.79-20.267zm-3.158 5.067c1.744 0 3.158 1.418 3.158 3.166 0 1.75-1.414 3.167-3.158 3.167s-3.158-1.418-3.158-3.167c0-1.748 1.414-3.166 3.158-3.166zm10.104 0c1.744 0 3.158 1.418 3.158 3.166 0 1.75-1.414 3.167-3.158 3.167-1.743 0-3.157-1.418-3.157-3.167 0-1.748 1.414-3.166 3.157-3.166zm10.106 5.066c1.745 0 3.159 1.417 3.159 3.167 0 1.75-1.414 3.166-3.159 3.166-1.744 0-3.157-1.417-3.157-3.166-.001-1.749 1.413-3.167 3.157-3.167zm-29.052 2.534c1.744 0 3.157 1.417 3.157 3.165 0 1.75-1.414 3.167-3.157 3.167s-3.158-1.418-3.158-3.167c0-1.748 1.414-3.165 3.158-3.165zm15.789 12.666c2.093 0 3.789 1.7 3.789 3.801 0 2.098-1.696 3.799-3.789 3.799s-3.789-1.701-3.789-3.799c0-2.101 1.696-3.801 3.789-3.801z"></path></svg>
    </div>
    <div class="tab-link" data-tab="music">
        Music
        <svg class="tab-icon" viewBox="0 0 24 24" fill="none"><path d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
    <div class="tab-link danger-tab" data-tab="danger">
        Danger Zone
        <svg class="tab-icon" viewBox="0 0 24 24" fill="none"><path d="M21.7605 15.92L15.3605 4.4C14.5005 2.85 13.3105 2 12.0005 2C10.6905 2 9.50047 2.85 8.64047 4.4L2.24047 15.92C1.43047 17.39 1.34047 18.8 1.99047 19.91C2.64047 21.02 3.92047 21.63 5.60047 21.63H18.4005C20.0805 21.63 21.3605 21.02 22.0105 19.91C22.6605 18.8 22.5705 17.38 21.7605 15.92ZM11.2505 9C11.2505 8.59 11.5905 8.25 12.0005 8.25C12.4105 8.25 12.7505 8.59 12.7505 9V14C12.7505 14.41 12.4105 14.75 12.0005 14.75C11.5905 14.75 11.2505 14.41 11.2505 14V9ZM12.7105 17.71C12.6605 17.75 12.6105 17.79 12.5605 17.83C12.5005 17.87 12.4405 17.9 12.3805 17.92C12.3205 17.95 12.2605 17.97 12.1905 17.98C12.1305 17.99 12.0605 18 12.0005 18C11.9405 18 11.8705 17.99 11.8005 17.98C11.7405 17.97 11.6805 17.95 11.6205 17.92C11.5605 17.9 11.5005 17.87 11.4405 17.83C11.3905 17.79 11.3405 17.75 11.2905 17.71C11.1105 17.52 11.0005 17.26 11.0005 17C11.0005 16.74 11.1105 16.48 11.2905 16.29C11.3405 16.25 11.3905 16.21 11.4405 16.17C11.5005 16.13 11.5605 16.1 11.6205 16.08C11.6805 16.05 11.7405 16.03 11.8005 16.02C11.9305 15.99 12.0705 15.99 12.1905 16.02C12.2605 16.03 12.3205 16.05 12.3805 16.08C12.4405 16.1 12.5005 16.13 12.5605 16.17C12.6105 16.21 12.6605 16.25 12.7105 16.29C12.8905 16.48 13.0005 16.74 13.0005 17C13.0005 17.26 12.8905 17.52 12.7105 17.71Z" fill="#ffffff"></path></svg>
    </div>
  </div>

  <div class="tab-content active" id="appearance">
      <div class="setting" data-setting="twemoji">
        <span>Disable Custom Emojis/Twemoji</span>
        <input type="checkbox" id="disableTwemoji">
      </div>
      <div class="setting" data-setting="darkMode">
        <span>Enable Dark Mode</span>
        <input type="checkbox" id="enableDarkMode">
      </div>
  </div>

  <div class="tab-content" id="music">
      <div class="setting" data-setting="typing">
        <span>Disable typing noises</span>
        <input type="checkbox" id="disableTyping">
      </div>
      <div class="setting" data-setting="bgm">
        <span>Enable Background-Music</span>
        <input type="checkbox" id="enableBgm">
      </div>
  </div>

  <div class="tab-content" id="danger">
      <button id="resetSettings">Reset Settings</button>
  </div>

  <div style="margin-top: 15px; font-size: 11px; color: #f5d742; text-align: center; opacity: 0.8;">
    Re-load site to apply changes.
  </div>
`;

const style = document.createElement("style");
style.textContent = `
  .tabs-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
  .tab-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    background: rgba(255,255,255,0.05);
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  }
  .tab-link:hover { background: rgba(255,255,255,0.1); }
  .tab-link.active { background: rgba(255,255,255,0.15); font-weight: 600; }
  
  .tab-icon { width: 16px; height: 16px; opacity: 0.5; }
  
  .danger-tab { color: #ff4d4d; }
  .danger-tab .tab-icon { fill: #ff4d4d; }

  .tab-content { display: none; }
  .tab-content.active { display: block; }

  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, .05);
    font-size: 14px;
    cursor: pointer;
  }
  .setting input { pointer-events: none; accent-color: #fff; }

  #resetSettings {
    margin-top: 10px;
    width: 100%;
    background: #ff4d4d;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }

  body.dark-mode { background-color: #181818; color: #f5f5f5; }
`;

document.head.appendChild(style);
overlay.appendChild(panel);
document.body.appendChild(overlay);

const typingToggle = panel.querySelector("#disableTyping");
const twemojiToggle = panel.querySelector("#disableTwemoji");
const bgmToggle = panel.querySelector("#enableBgm");
const darkModeToggle = panel.querySelector("#enableDarkMode");

const settings = ["disableTyping", "disableTwemoji", "enableBgm", "darkMode"];
const toggles = [typingToggle, twemojiToggle, bgmToggle, darkModeToggle];

toggles.forEach((t, i) => {
    t.checked = localStorage.getItem(settings[i]) === "true";
});

if (darkModeToggle.checked) document.body.classList.add('dark-mode');

panel.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("pointerdown", () => {
        panel.querySelectorAll(".tab-link, .tab-content").forEach(el => el.classList.remove("active"));
        link.classList.add("active");
        panel.querySelector(`#${link.dataset.tab}`).classList.add("active");
    });
});

settingsBtn.addEventListener("pointerdown", e => {
  e.stopPropagation();
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.opacity = 1;
    panel.style.opacity = 1;
    panel.style.transform = "scale(1)";
  }, 10);
});

const closePanel = () => {
  overlay.style.opacity = 0;
  panel.style.opacity = 0;
  panel.style.transform = "scale(0.9)";
  setTimeout(() => overlay.style.display = "none", 300);
};

panel.querySelector("#closeSettings").addEventListener("pointerdown", closePanel);
overlay.addEventListener("pointerdown", e => e.target === overlay && closePanel());

const setupToggle = (selector, storageKey, callback) => {
    panel.querySelector(`[data-setting="${selector}"]`).addEventListener("pointerdown", e => {
        e.stopPropagation();
        const input = panel.querySelector(`#${panel.querySelector(`[data-setting="${selector}"]`).querySelector('input').id}`);
        input.checked = !input.checked;
        localStorage.setItem(storageKey, input.checked);
        if(callback) callback(input.checked);
    });
};

setupToggle("typing", "disableTyping");
setupToggle("twemoji", "disableTwemoji");
setupToggle("bgm", "enableBgm", checked => {
});
setupToggle("darkMode", "darkMode", checked => {
    document.body.classList.toggle('dark-mode', checked);
});

panel.querySelector("#resetSettings").addEventListener("pointerdown", () => {
    settings.forEach(s => localStorage.removeItem(s));
    location.reload(); 
});
