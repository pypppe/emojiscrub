// command palette panel

const paletteOverlay = document.createElement("div");
paletteOverlay.style.cssText = `
  position: fixed;
  inset: 0;
  display: none;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  z-index: 999999;
`;

const paletteBox = document.createElement("div");
paletteBox.style.cssText = `
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  width: 420px;
  font-family: 'Poppins', sans-serif;
  overflow: visible;
  position: relative;
`;

const paletteInput = document.createElement("input");
paletteInput.type = "text";
paletteInput.style.cssText = `
  width: 100%;
  padding: 14px 18px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  outline: none;
  color: #1a1a1a;
  background: transparent;
  box-sizing: border-box;
`;

const suggestions = document.createElement("div");
suggestions.style.cssText = `
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  overflow: hidden;
  display: none;
`;

const commands = [
  { label: "regen", action: () => { hidePalette(); if (typeof newPuzzle === "function") newPuzzle(); } },
  { label: "policy", action: () => { hidePalette(); window.open("https://escrub.astrarune.com/policy", "_blank"); } },
  { label: "twitter", action: () => { hidePalette(); window.open("https://x.com/zandovo1", "_blank"); } },
  { label: "github", action: () => { hidePalette(); window.open("https://github.com/pypppe/emojiscrub", "_blank"); } },
];

paletteBox.appendChild(paletteInput);
paletteBox.appendChild(suggestions);
paletteOverlay.appendChild(paletteBox);
document.body.appendChild(paletteOverlay);

const placeholderTexts = ["regen", "policy", "twitter", "github"];
let placeholderIndex = 0;
let placeholderInterval = null;

const animatePlaceholder = () => {
  const text = placeholderTexts[placeholderIndex];
  let step = 0;
  const totalSteps = text.length + 5;

  const tick = () => {
    if (step <= text.length) {
      paletteInput.placeholder = text.slice(0, step);
      step++;
      placeholderInterval = setTimeout(tick, 100);
    } else if (step <= text.length + 10) {
      // pause
      step++;
      placeholderInterval = setTimeout(tick, 80);
    } else {
      // delete
      const current = paletteInput.placeholder;
      if (current.length > 0) {
        paletteInput.placeholder = current.slice(0, -1);
        placeholderInterval = setTimeout(tick, 80);
      } else {
        placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
        placeholderInterval = setTimeout(animatePlaceholder, 300);
      }
    }
  };
  tick();
};

const showPalette = () => {
  paletteOverlay.style.display = "flex";
  paletteInput.value = "";
  suggestions.style.display = "none";
  paletteInput.focus();
  animatePlaceholder();
};

const hidePalette = () => {
  paletteOverlay.style.display = "none";
  paletteInput.value = "";
  suggestions.style.display = "none";
  clearTimeout(placeholderInterval);
  paletteInput.placeholder = "";
};

const renderSuggestions = (query) => {
  suggestions.innerHTML = "";
  if (!query) { suggestions.style.display = "none"; return; }

  const matches = commands.filter(c => c.label.startsWith(query.toLowerCase()));
  if (matches.length === 0) { suggestions.style.display = "none"; return; }

  matches.forEach(cmd => {
    const item = document.createElement("div");
    item.textContent = cmd.label;
    item.style.cssText = `
      padding: 12px 18px;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      cursor: pointer;
      color: #1a1a1a;
      transition: background 0.15s, color 0.15s;
    `;
    item.addEventListener("mouseenter", () => {
      item.style.background = "#f5d742";
      item.style.color = "#1a1a1a";
    });
    item.addEventListener("mouseleave", () => {
      item.style.background = "transparent";
      item.style.color = "#1a1a1a";
    });
    item.addEventListener("mousedown", (e) => {
      e.preventDefault();
      paletteInput.value = cmd.label;
      suggestions.style.display = "none";
      cmd.action();
    });
    suggestions.appendChild(item);
  });

  suggestions.style.display = "block";
};

paletteInput.addEventListener("input", () => {
  renderSuggestions(paletteInput.value.trim());
});

paletteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const val = paletteInput.value.trim().toLowerCase();
    const match = commands.find(c => c.label === val);
    if (match) match.action();
  }
  if (e.key === "Escape") {
    hidePalette();
  }
});

paletteOverlay.addEventListener("mousedown", (e) => {
  if (e.target === paletteOverlay) hidePalette();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (paletteOverlay.style.display === "flex") {
      hidePalette();
    } else {
      showPalette();
    }
  }
});
