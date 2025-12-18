const button = document.getElementById("downloadBtn");

button.addEventListener("click", () => {
    if (button.dataset.cooldown) return;

    const originalText = button.textContent;
    button.textContent = "Taking you to the Mediafire file...";
    button.dataset.cooldown = "true";

    window.open(
        "https://www.mediafire.com/file/2ydezwxffbw9yvk/EmojiScrub+Setup+1.0.0.exe/file",
        "_blank"
    );

    setTimeout(() => {
        button.textContent = originalText;
        delete button.dataset.cooldown;
    }, 2000);
});
