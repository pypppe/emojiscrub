
const puzzles = [
    { emoji: "🚪🔑", answer: "door key" },
    { emoji: "🏠📃", answer: "homework" },
    { emoji: "🐶🏠", answer: "dog house" },
    { emoji: "📱🔋", answer: "phone battery" },
    { emoji: "🪟🖥️", answer: "windows" },
    { emoji: "❌🧽", answer: "unscrub" },
    { emoji: "😤🎮", answer: "steam" }
];

let currentPuzzle = null;
let streak = 0;

const emojiDisplay = document.getElementById("emojiDisplay");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");

function newPuzzle() {
    currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    emojiDisplay.textContent = currentPuzzle.emoji;
    answerInput.value = "";
    feedback.textContent = "";
}

answerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkAnswer();
    }
});

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentPuzzle.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        streak++;

        if (streak >= 10) {
            feedback.textContent = "You're excellent.";
        } else if (streak >= 5) {
            feedback.textContent = "I'm proud of you.";
        } else if (streak >= 3) {
            feedback.textContent = "You're great.";
        } else {
            feedback.textContent = "Correct!";
        }

        setTimeout(newPuzzle, 1000);
    } else {
        feedback.textContent = "Try again!";
        streak = 0;
    }
}

// Start game
newPuzzle();
