const settingsBtn = document.getElementById("settingsBtn");

const popup = document.createElement("div");
popup.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999999;
`;

const panel = document.createElement("div");
panel.style.cssText = `
    background: #111;
    color: #fff;
    padding: 20px;
    width: 280px;
    font-family: Poppins, sans-serif;
`;

panel.innerHTML = `
    <label>
        <input type="checkbox" id="disableTyping">
        Disable Typing noises
    </label><br><br>

    <label>
        <input type="checkbox" id="disableTwemoji">
        Disable Twemoji
    </label><br><br>

    <button id="resetSettings">Reset Settings</button>
`;

popup.appendChild(panel);
document.body.appendChild(popup);

const typingToggle = panel.querySelector("#disableTyping");
const twemojiToggle = panel.querySelector("#disableTwemoji");

typingToggle.checked = localStorage.getItem("disableTyping") === "true";
twemojiToggle.checked = localStorage.getItem("disableTwemoji") === "true";

settingsBtn.onclick = () => popup.style.display = "flex";

popup.onclick = e => {
    if (e.target === popup) popup.style.display = "none";
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
