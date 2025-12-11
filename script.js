const puzzles = [
    { emoji: "🚪🔑", answer: "door key", hint: "Used to open a door" },
    { emoji: "🏠📃", answer: "homework", hint: "Teachers give you this to do at home." },
    { emoji: "🐶🏠", answer: "dog house", hint: "Where your dog sleeps" },
    { emoji: "📱🔋", answer: "phone battery", hint: "Keeps your device alive" },
    { emoji: "🪟🖥️", answer: "windows", hint: "Microsoft OS." },
    { emoji: "❌🧽", answer: "unscrub", hint: "Astrarune's game." },
    { emoji: "😤🎮", answer: "steam", hint: "PC gaming platform" },
    { emoji: "👥🚢", answer: "friendship", hint: "A friend.. what?" },
    { emoji: "📽️🍿", answer: "movie", hint: "You watch this in a cinema." },
    { emoji: "🅶🔎", answer: "google", hint: "Popular search engine." },
    { emoji: "🪨⭐", answer: "rockstar", hint: "Created Grand Theft Auto." },
    { emoji: "🔑😺", answer: "kitkat", hint: "Chocolate brand. 🔑 means Kit" },
    { emoji: "🍕🎉", answer: "pizza party", hint: "🎉 means party." },
    { emoji: "🐧💻", answer: "Linux", hint: "Open-source operating system." },
    { emoji: "👽🎮", answer: "alienware", hint: "🎮 means ware." },
    { emoji: "🧑‍💻💾", answer: "programming", hint: "Writing code." },
    { emoji: "🏃🍇", answer: "fast food", hint: "Quick meals you eat on the go." },
    { emoji: "ℹ️📱", answer: "iphone", hint: "The company that owns this device is named after a fruit." },
    { emoji: "🍩👨‍🍳", answer: "homer simpson", hint: "From The Simpsons." },
    { emoji: "🎬💤", answer: "movie night", hint: "💤 means night." },
    { emoji: "😺🐟", answer: "catfish", hint: "A type of internet scam or a fish." },
    { emoji: "💻🖱️", answer: "mouse", hint: "Used to point and click on a screen." },
    { emoji: "🏎️💨", answer: "race car", hint: "Cars that go really fast." },
    { emoji: "🎮👾", answer: "arcade", hint: "Place for gaming." },
    { emoji: "🦄✨", answer: "unicorn", hint: "A magical creature." },
    { emoji: "🕷️👨", answer: "spiderman", hint: "A superhero loved by kids." }
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

    twemoji.parse(emojiDisplay);

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

if (streak > 100) {
    feedback.textContent = "💯💯💯";
} else if (streak > 50) {
    feedback.textContent = "You're cheating.";
} else if (streak > 45) {
    feedback.textContent = "45, no way.";
} else if (streak > 40) {
    feedback.textContent = "Your English must be brilliant!";
} else if (streak > 35) {
    feedback.textContent = "Try Again!, sike!";
} else if (streak > 30) {
    feedback.textContent = "I know something's up.";
} else if (streak > 25) {
    feedback.textContent = "Are you cheating?";
} else if (streak > 20) {
    feedback.textContent = "I can't believe you.";
} else if (streak > 15) {
    feedback.textContent = "You're doing really great.";
} else if (streak >= 10) {
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
        feedback.textContent = "Incorrect, use the hints to help you.";
        streak = 0;
    }
}

newPuzzle();
