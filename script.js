
const puzzles = [
    { emoji: "🚪🔑", answer: "door key", hint: "Used to open a door" },
    { emoji: "🏠📃", answer: "homework", hint: "Teachers give you this to do at home." },
    { emoji: "🐶🏠", answer: "dog house", hint: "Where your dog sleeps" },
    { emoji: "📱🔋", answer: "phone battery", hint: "Keeps your device alive" },
    { emoji: "🪟🖥️", answer: "windows", hint: "Microsoft OS." },
    { emoji: "😤🎮", answer: "steam", hint: "Games like Garry's Mod can be bought on here." },
    { emoji: "👥🚢", answer: "friendship", hint: "A friend what..!?" },
    { emoji: "📽️🖥️", answer: "movie", hint: "You watch this in a cinema." },
    { emoji: "🇬🔎", answer: "google", hint: "Popular search engine." },
    { emoji: "🪨⭐", answer: "rockstar", hint: "Created Grand Theft Auto." },
    { emoji: "🔑🇹😺", answer: "kitkat", hint: "Chocolate brand." },
    { emoji: "🍕🎉", answer: "pizza party", hint: "🎉 means party." },
    { emoji: "🐧💻", answer: "Linux", hint: "Open-source Kernel." },
    { emoji: "🏃🍔", answer: "fast food", hint: "Quick meals you eat on the go." },
    { emoji: "ℹ️📱", answer: "iphone", hint: "The company that owns this device is named after a fruit." },
    { emoji: "🍩👨‍🍳", answer: "homer simpson", hint: "Home + R + simpson" },
    { emoji: "🎬💤", answer: "movie night", hint: "💤 means night." },
    { emoji: "😺🐟", answer: "catfish", hint: "A type of internet scam or a fish." },
    { emoji: "💻🖱️", answer: "mouse", hint: "Used to point and click on a screen." },
    { emoji: "🏎️💨", answer: "race car", hint: "Cars that go really fast." },
    { emoji: "🦄✨", answer: "unicorn", hint: "A non-existent type of Horse." },
    { emoji: "🕯️🎂", answer: "birthday", hint: "This happens on the day when someone was born." },
    { emoji: "🎅🎄", answer: "christmas", hint: "Happens on December 25th." },
    { emoji: "🕷️👨", answer: "spiderman", hint: "A superhero loved by kids." },
    { emoji: "⭐🟦", answer: "europe", hint: "United Kingdom left this contient in 2020." },
    { emoji: "⬜🟥", answer: "poland", hint: "Invaded in World War Two." },
    { emoji: "🍎👩‍💻", answer: "imac", hint: "Apple's computers." },
    { emoji: "🌌🍫", answer: "milkyway", hint: "This chocolate brand is named after a galaxy." },
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
    { emoji: "🧑‍🚀🚀", answer: "astronaut", hint: "People like these have visited the Moon." },
    { emoji: "🏳️🔴", answer: "japan", hint: "Country in Asia." },
    { emoji: "🔵🔴🏳️", answer: "south korea", hint: "Country in Asia." },
    { emoji: "🇫🇷😋", answer: "baguette", hint: "This food is very popular in France." },
    { emoji: "💬🤖", answer: "chatgpt", hint: "A Popular AI Chatbot." },
    { emoji: "⛏️🎮", answer: "minecraft", hint: "A game developed by Mojang Studios." },
    { emoji: "🟦🦔", answer: "sonic", hint: "A very popular character created by SEGA." },
    { emoji: "⭐🚩", answer: "north korea", hint: "This country has no freedom, and escaping it can be death." },
    { emoji: "☀️🥵", answer: "summer", hint: "This is a season where it's get real hot." },
    { emoji: "🎃👻", answer: "halloween", hint: "Happens in October." },
    { emoji: "🇬🇧🍵", answer: "tea", hint: "This drink is popular in the UK." },
    { emoji: "🇮🇪🇬🇧", answer: "Northern Ireland", hint: "This country is inside the UK, but it contains Ireland in the name." },
    { emoji: "🏹🐧", answer: "arch linux", hint: "Arch, then a name of an open-source kernel." },
    { emoji: "🌈❤️", answer: "lgbtq", hint: "This is a community of people." },
    { emoji: "⚧️🌈", answer: "transgender", hint: "These people identify as the opposite gender they were born as." },
    { emoji: "🟦🐤", answer: "twitter", hint: "This social media is now called X." },
    { emoji: "🟥⭐", answer: "china", hint: "This country is friends with North Korea." },
    { emoji: "🟩🐤", answer: "duolingo", hint: "This app helps you learn languages." },
    { emoji: "🎓🏫", answer: "college", hint: "People usually go to this after Secondary School. (UK)" },
    { emoji: "🇬✉️", answer: "gmail", hint: "This is Google's Mail website." },
    { emoji: "🟥⬜", answer: "indonesia", hint: "This flag gets mixed up with Poland's flag." },
    { emoji: "✝️🛐", answer: "church", hint: "Christians usually go here to pray." },
    { emoji: "❄️☃️", answer: "snow", hint: "This usually happens in December-January." },
    { emoji: "🦷🪥", answer: "toothpaste", hint: "You apply this on Toothbrush's to brush teeth." },
    { emoji: "🧼🛁", answer: "bath", hint: "You take these to smell fresh and feel clean." },
    { emoji: "🟩🍎", answer: "green apple", hint: "This type of apple is healthier than Red Apples." },
    { emoji: "💈✂️", answer: "barber", hint: "People go here, usually men to get a haircut." },
    { emoji: "🟨🧑‍💻", answer: "javascript", hint: "This programming language is used to make sites work." },
    { emoji: "🗒️📓", answer: "notebook", hint: "This is a book where you take notes." },
    { emoji: "🦶⚽️", answer: "football", hint: "This is a sport. It is called Soccer in America." },
    { emoji: "👩‍🔬🧪", answer: "scientist", hint: "These people like Science." },
    { emoji: "🎯🛍️", answer: "target", hint: "This is a shop in America." },
    { emoji: "🇯🇵🗣️", answer: "japanese", hint: "This is the language people that live in Japan speak in." },
    { emoji: "🇩🇪🗣️", answer: "german", hint: "This is the language people that live in Germany speak in." },
    { emoji: "🇰🇷🗣️", answer: "korean", hint: "This is the language people that live in South Korea speak in." },
    { emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿🗣️", answer: "english", hint: "This is the language people that live in England speak in." },
    { emoji: "🇷🇴🇹🇩", answer: "romania", hint: "Romania or Chad?" },
    { emoji: "🇹🇩🇷🇴", answer: "chad", hint: "Romania or Chad?" },
    { emoji: "🇮🇹😋", answer: "pizza", hint: "This food usually has pepperoni on it." }
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
  "Emojiscrub | Webgame",
  "Emojiscrub | By Zandovo",
  "Emojiscrub | Trusted.",
"Emojiscrub | Privacy Respect.",
"Emojiscrub | Zandovo.",
    "Emojiscrub",
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

let isCooldown = false;

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

        const correctSound = new Audio("audio/incorrect.mp3");
        correctSound.play();

        if (streak === 200) {
            feedback.textContent = "200!";
        } else if (streak === 250) {
            feedback.textContent = "Okay I get it, you're cheating.";
        } else if (streak === 300) {
            feedback.textContent = "👏👏👏";
        } else if (streak === 350) {
            feedback.textContent = "👏👏👏👏";
        } else if (streak === 400) {
            feedback.textContent = "Are you a robot ✅";
        } else if (streak === 450) {
            feedback.textContent = "*sleepy*, oh hey did u get it right again?";
        } else if (streak === 500) {
            feedback.textContent = "500! 👏👏👏";
        } else if (streak === 550) {
            feedback.textContent = "You're really... focused...";
        } else if (streak === 600) {
            feedback.textContent = "I'm getting sleepy...";
        } else if (streak === 650) {
            feedback.textContent = "💤💤💤";
        } else if (streak === 700) {
            feedback.textContent = "😴😴😴";
        } else if (streak === 750) {
            feedback.textContent = "🥱🥱🥱";
        } else if (streak === 800) {
            feedback.textContent = "Oh hey it's morning..";
        } else if (streak === 850) {
            feedback.textContent = "Dude you're still typing..?";
        } else if (streak === 900) {
            feedback.textContent = "Okay. fine. you're nearly there.";
        } else if (streak === 950) {
            feedback.textContent = "50 more left to go.";
        } else if (streak === 1000) {
            feedback.textContent = "You've done it, 1000!";
        } else if (streak === 2000) {
            feedback.textContent = "1000+1000";
        } else if (streak === 3000) {
            feedback.textContent = "Okay I'm finished.";
        } else if (streak > 100) {
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
        const incorrectSound = new Audio("audio/correct.wav");
        incorrectSound.play();

        feedback.textContent = "Incorrect, use the hints to help you.";
        streak = 0;
    }
}

const clickSound = new Audio("audio/click.wav");
document.addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.play();
});

newPuzzle();
