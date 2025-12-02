const puzzles = [
    { emoji: "🚪🔑", answer: "door key", hint: "Used to open a door" },
    { emoji: "🏠📃", answer: "homework", hint: "Teachers give you this to do at home." },
    { emoji: "🐶🏠", answer: "dog house", hint: "Where your dog sleeps" },
    { emoji: "📱🔋", answer: "phone battery", hint: "Keeps your device alive" },
    { emoji: "🪟🖥️", answer: "windows", hint: "Microsoft OS." },
    { emoji: "❌🧽", answer: "unscrub", hint: "Astrarune's game." },
    { emoji: "😤🎮", answer: "steam", hint: "PC gaming platform" }
];

let currentPuzzle = null;
let streak = 0;

const emojiDisplay = document.getElementById("emojiDisplay");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const hintDisplay = document.getElementById("hint");

function newPuzzle() {
    currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    emojiDisplay.textContent = currentPuzzle.emoji;

    hintDisplay.textContent = currentPuzzle.hint || "";

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

newPuzzle();
