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
`;

const panel = document.createElement("div");
panel.style.cssText = `
  background: #0f0f12;
  color: #fff;
  width: 300px;
  padding: 18px;
  font-family: Poppins, sans-serif;
  box-shadow: 0 20px 60px rgba(0,0,0,.6);
`;

panel.innerHTML = `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
    <span style="font-size:16px;font-weight:600;">Settings</span>
    <button id="closeSettings" style="background:none;border:none;cursor:pointer;padding:0;">
      <svg width="18" height="18" viewBox="0 -0.5 21 21" fill="#fff" stroke="#fff">
        <polygon points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
        transform="translate(-363,-80)"/>
      </svg>
    </button>
  </div>

  <div class="setting">
    <label>
      <input type="checkbox" id="disableTyping">
      Disable typing noises
    </label>
  </div>

  <div class="setting">
    <label>
      <input type="checkbox" id="disableTwemoji">
      Disable Twemoji
    </label>
  </div>

  <button id="resetSettings" style="
    margin-top:16px;
    width:100%;
    background:#1a1a1f;
    color:#fff;
    border:none;
    padding:10px;
    cursor:pointer;
  ">
    Reset Settings
  </button>
`;

const style = document.createElement("style");
style.textContent = `
  .setting {
    padding:10px 0;
    border-bottom:1px solid rgba(255,255,255,.08);
  }

  .setting label {
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
    font-size:14px;
  }

  input[type="checkbox"] {
    accent-color: #fff;
  }

  #resetSettings:hover {
    background:#232329;
  }
`;
document.head.appendChild(style);

overlay.appendChild(panel);
document.body.appendChild(overlay);

const typingToggle = panel.querySelector("#disableTyping");
const twemojiToggle = panel.querySelector("#disableTwemoji");

typingToggle.checked = localStorage.getItem("disableTyping") === "true";
twemojiToggle.checked = localStorage.getItem("disableTwemoji") === "true";

settingsBtn.onclick = () => {
  overlay.style.display = "flex";
};

panel.querySelector("#closeSettings").onclick = () => {
  overlay.style.display = "none";
};

overlay.onclick = e => {
  if (e.target === overlay) overlay.style.display = "none";
};

typingToggle.onchange = () => {
  localStorage.setItem("disableTyping", typingToggle.checked);
};

twemojiToggle.onchange = () => {
  localStorage.setItem("disableTwemoji", twemojiToggle.checked);

  if (!twemojiToggle.checked && window.twemoji) {
    twemoji.parse(emojiDisplay);
  }
};

panel.querySelector("#resetSettings").onclick = () => {
  localStorage.removeItem("disableTyping");
  localStorage.removeItem("disableTwemoji");

  typingToggle.checked = false;
  twemojiToggle.checked = false;

  if (window.twemoji) {
    twemoji.parse(emojiDisplay);
  }
};
