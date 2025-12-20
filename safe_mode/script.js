const puzzles = [
    { emoji: "🚪🔑", answer: "door key", hint: "Used to open a door" },
    { emoji: "🏠📃", answer: "homework", hint: "Teachers give you this to do at home." },
    { emoji: "🐶🏠", answer: "dog house", hint: "Where your dog sleeps" },
    { emoji: "📱🔋", answer: "phone battery", hint: "Keeps your device alive" },
    { emoji: "👥🚢", answer: "friendship", hint: "A friend.. what?" },
    { emoji: "📽️🍿", answer: "movie", hint: "You watch this in a cinema." },
    { emoji: "🇬🔎", answer: "google", hint: "Popular search engine." },
    { emoji: "🪨⭐", answer: "rockstar", hint: "Created Grand Theft Auto." },
    { emoji: "🔑🇹😺", answer: "kitkat", hint: "Chocolate brand." },
    { emoji: "🍕🎉", answer: "pizza party", hint: "🎉 means party." },,
    { emoji: "ℹ️📱", answer: "iphone", hint: "The company that owns this device is named after a fruit." },
    { emoji: "🎬💤", answer: "movie night", hint: "💤 means night." },
    { emoji: "💻🖱️", answer: "mouse", hint: "Used to point and click on a screen." },
    { emoji: "🏃🏎️", answer: "race car", hint: "Cars that go really fast." },
    { emoji: "🕯️🎂", answer: "birthday", hint: "This happens on the day when someone was born." },
    { emoji: "🎅🎄", answer: "christmas", hint: "Happens on December 25th." },
    { emoji: "🕷️👨", answer: "spiderman", hint: "A superhero loved by kids." },
    { emoji: "⭐🟦", answer: "europe", hint: "United Kingdom left this contient in 2020." },
    { emoji: "🟥⬜", answer: "poland", hint: "Invaded in World War Two." },
    { emoji: "🍎👩‍💻", answer: "imac", hint: "Apple's computers." },
    { emoji: "🌌🍫", answer: "milkyway", hint: "Chocolate brand." },
    { emoji: "🍫🥛", answer: "chocolate milk", hint: "Usually have this on Winter, to have a nice warm drink." },
    { emoji: "🥖🗼", answer: "france", hint: "This country is in europe, near UK." },
    { emoji: "🎂🎉", answer: "birthday party", hint: "🎉 means party." },
    { emoji: "🍝🟥", answer: "mario", hint: "Characted by Nintendo." },
    { emoji: "🗝️🛹", answer: "keyboard", hint: "You use this to type on a computer, or phone." },
    { emoji: "🎄🎁", answer: "christmas present", hint: "Something you get on Christmas." },
    { emoji: "📱🎤", answer: "samsung", hint: "Phone brand based off Android." },
    { emoji: "ℹ️🗒️", answer: "ipad", hint: "Apple's tablets." }
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

if (localStorage.getItem("disableTwemoji") !== "true") {
    twemoji.parse(emojiDisplay);
}

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
    feedback.textContent = "Correct!";
} else if (streak > 50) {
    feedback.textContent = "Correct!";
} else if (streak > 45) {
    feedback.textContent = "Correct!";
} else if (streak > 40) {
    feedback.textContent = "Correct!";
} else if (streak > 35) {
    feedback.textContent = "Correct!";
} else if (streak > 30) {
    feedback.textContent = "Correct!";
} else if (streak > 25) {
    feedback.textContent = "Correct!";
} else if (streak > 20) {
    feedback.textContent = "Correct!";
} else if (streak > 15) {
    feedback.textContent = "Correct!";
} else if (streak >= 10) {
    feedback.textContent = "Correct!";
} else if (streak >= 5) {
    feedback.textContent = "Correct!";
} else if (streak >= 3) {
    feedback.textContent = "Correct!";
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
