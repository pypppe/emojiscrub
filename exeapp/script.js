const button = document.getElementById("downloadBtn");

button.addEventListener("click", () => {
    if (button.dataset.cooldown) return;

    const originalText = button.textContent;
    button.textContent = "Coming Soon!";
    button.dataset.cooldown = "true";

    setTimeout(() => {
        button.textContent = originalText;
        delete button.dataset.cooldown;
    }, 2000);
});
