const puzzles = [
    { emoji: "🚪🔑", answer: "door key", hint: "Used to open a door" },
    { emoji: "🏠📃", answer: "homework", hint: "Teachers give you this to do at home." },
    { emoji: "🐶🏠", answer: "dog house", hint: "Where your dog sleeps" },
    { emoji: "📱🔋", answer: "phone battery", hint: "Keeps your device alive" },
    { emoji: "🪟🖥️", answer: "windows", hint: "Microsoft OS." },
    { emoji: "😤🎮", answer: "steam", hint: "PC gaming platform" },
    { emoji: "👥🚢", answer: "friendship", hint: "A friend.. what?" },
    { emoji: "📽️🍿", answer: "movie", hint: "You watch this in a cinema." },
    { emoji: "🇬🔎", answer: "google", hint: "Popular search engine." },
    { emoji: "🪨⭐", answer: "rockstar", hint: "Created Grand Theft Auto." },
    { emoji: "🔑🇹😺", answer: "kitkat", hint: "Chocolate brand." },
    { emoji: "🍕🎉", answer: "pizza party", hint: "🎉 means party." },
    { emoji: "🐧💻", answer: "Linux", hint: "Open-source operating system." },
    { emoji: "👽🎮", answer: "alienware", hint: "🎮 means ware." },
    { emoji: "🧑‍💻💾", answer: "programming", hint: "Writing code." },
    { emoji: "🏃🍔", answer: "fast food", hint: "Quick meals you eat on the go." },
    { emoji: "ℹ️📱", answer: "iphone", hint: "The company that owns this device is named after a fruit." },
    { emoji: "🍩👨‍🍳", answer: "homer simpson", hint: "Home + R + simpson" },
    { emoji: "🎬💤", answer: "movie night", hint: "💤 means night." },
    { emoji: "😺🐟", answer: "catfish", hint: "A type of internet scam or a fish." },
    { emoji: "💻🖱️", answer: "mouse", hint: "Used to point and click on a screen." },
    { emoji: "🏃🏎️", answer: "race car", hint: "Cars that go really fast." },
    { emoji: "🦄✨", answer: "unicorn", hint: "A non-existent type of Horse." },
    { emoji: "🕯️🎂", answer: "birthday", hint: "This happens on the day when someone was born." },
    { emoji: "🎅🎄", answer: "christmas", hint: "Happens on December 25th." },
    { emoji: "🕷️👨", answer: "spiderman", hint: "A superhero loved by kids." },
    { emoji: "⭐🟦", answer: "europe", hint: "United Kingdom left this contient in 2020." },
    { emoji: "🟥⬜", answer: "poland", hint: "Invaded in World War Two." },
    { emoji: "🍎👩‍💻", answer: "imac", hint: "Apple's computers." },
    { emoji: "🌌🍫", answer: "milkyway", hint: "Chocolate brand." },
    { emoji: "💬🟦", answer: "discord", hint: "Popular “Gaming” chat platform." },
    { emoji: "🟢🎶", answer: "spotify", hint: "Let's you listen to music." },
    { emoji: "🫵🧪", answer: "youtube", hint: "is that YOUr TUBE?" },
    { emoji: "🍫🥛", answer: "chocolate milk", hint: "Usually have this on Winter, to have a nice warm drink." },
    { emoji: "🥖🗼", answer: "france", hint: "This country is in europe, near UK." },
    { emoji: "🎂🎉", answer: "birthday party", hint: "🎉 means party." },
    { emoji: "▶️⛽", answer: "playstation", hint: "Owned by Sony. It's also a Console." },
    { emoji: "❎📦", answer: "xbox", hint: "Owned by Microsoft. It's also a Console." },
    { emoji: "🍝🟥", answer: "mario", hint: "Characted by Nintendo." },
    { emoji: "😀🧽", answer: "emojiscrub", hint: "It's the game you're playing." },
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

document.title = [
  "Emojiscrub | Official Website",
  "Emojiscrub | The Game",
  "Emojiscrub | Open-source on GitHub."
][Math.floor(Math.random() * 3)];

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
