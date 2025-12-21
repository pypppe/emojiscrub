const settingsBtn = document.getElementById("settingsBtn");

const overlay = document.createElement("div");
overlay.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.55);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  touch-action: manipulation;
`;

const panel = document.createElement("div");
panel.style.cssText = `
  background: #0f0f12;
  color: #fff;
  width: 300px;
  padding: 18px;
  font-family: Poppins, sans-serif;
  box-shadow: 0 20px 60px rgba(0,0,0,.6);
  user-select: none;
`;

panel.innerHTML = `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
    <span style="font-size:16px;font-weight:600;">Settings</span>
    <button id="closeSettings" style="background:none;border:none;padding:0;cursor:pointer;">
      <svg width="18" height="18" viewBox="0 -0.5 21 21" fill="#fff" stroke="#fff">
        <polygon points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
          transform="translate(-363,-80)" />
      </svg>
    </button>
  </div>

  <div class="setting" data-setting="typing">
    <span>Disable typing noises</span>
    <input type="checkbox" id="disableTyping">
  </div>

  <div class="setting" data-setting="twemoji">
    <span>Disable Twemoji</span>
    <input type="checkbox" id="disableTwemoji">
  </div>

  <div class="setting" data-setting="bgm">
    <span>Enable Background-Music</span>
    <input type="checkbox" id="enableBgm">
  </div>

  <button id="resetSettings">Reset Settings</button>

  <div style="
    margin-top: 10px;
    font-size: 12px;
    color: #f5d742;
    text-align: center;
  ">
    Refresh site to apply changes.
  </div>
`;


const style = document.createElement("style");
style.textContent = `
  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,.08);
    font-size: 14px;
    cursor: pointer;
    touch-action: manipulation;
  }

  .setting input {
    width: 18px;
    height: 18px;
    pointer-events: none;
    accent-color: #fff;
  }

  #resetSettings {
    margin-top: 16px;
    width: 100%;
    background: #1a1a1f;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  #resetSettings:hover {
    background: #232329;
  }
`;
document.head.appendChild(style);

overlay.appendChild(panel);
document.body.appendChild(overlay);

const typingToggle = panel.querySelector("#disableTyping");
const twemojiToggle = panel.querySelector("#disableTwemoji");
const bgmToggle = panel.querySelector("#enableBgm");

typingToggle.checked = localStorage.getItem("disableTyping") === "true";
twemojiToggle.checked = localStorage.getItem("disableTwemoji") === "true";
bgmToggle.checked = localStorage.getItem("enableBgm") === "true";

// Background Music Setup
const bgmAudio = new Audio("bgm.mp3");
bgmAudio.loop = true;
bgmAudio.volume = 0.5;

// Play or pause the background music based on the setting
if (bgmToggle.checked) {
  bgmAudio.play();
}

settingsBtn.addEventListener("pointerdown", e => {
  e.stopPropagation();
  overlay.style.display = "flex";
});

panel.querySelector("#closeSettings").addEventListener("pointerdown", e => {
  e.stopPropagation();
  overlay.style.display = "none";
});

overlay.addEventListener("pointerdown", e => {
  if (e.target === overlay) overlay.style.display = "none";
});

panel.querySelector('[data-setting="typing"]').addEventListener("pointerdown", e => {
  e.stopPropagation();
  typingToggle.checked = !typingToggle.checked;
  localStorage.setItem("disableTyping", typingToggle.checked);
});

panel.querySelector('[data-setting="twemoji"]').addEventListener("pointerdown", e => {
  e.stopPropagation();
  twemojiToggle.checked = !twemojiToggle.checked;
  localStorage.setItem("disableTwemoji", twemojiToggle.checked);
  if (!twemojiToggle.checked && window.twemoji) {
    twemoji.parse(emojiDisplay);
  }
});

panel.querySelector('[data-setting="bgm"]').addEventListener("pointerdown", e => {
  e.stopPropagation();
  bgmToggle.checked = !bgmToggle.checked;
  localStorage.setItem("enableBgm", bgmToggle.checked);

  if (bgmToggle.checked) {
    bgmAudio.play();
  } else {
    bgmAudio.pause();
  }
});

panel.querySelector("#resetSettings").addEventListener("pointerdown", e => {
  e.stopPropagation();
  localStorage.removeItem("disableTyping");
  localStorage.removeItem("disableTwemoji");
  localStorage.removeItem("enableBgm");
  typingToggle.checked = false;
  twemojiToggle.checked = false;
  bgmToggle.checked = false;
  bgmAudio.pause();
  if (window.twemoji) {
    twemoji.parse(emojiDisplay);
  }
});
