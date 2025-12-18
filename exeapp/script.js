const button = document.getElementById("downloadBtn");

button.addEventListener("click", () => {
    if (button.dataset.cooldown) return;

    const originalText = button.textContent;
    button.textContent = "Taking you to GitHub releases...";
    button.dataset.cooldown = "true";

    window.open(
        "https://github.com/pypppe/emojiscrub/releases",
        "_blank"
    );

    setTimeout(() => {
        button.textContent = originalText;
        delete button.dataset.cooldown;
    }, 2000);
});
