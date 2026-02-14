const readline = require("readline");

// ========================
// WAIT! This is a *TERMINAL* version of Emojiscrub.
// ========================
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
    { emoji: "🇮🇹😋", answer: "pizza", hint: "This food usually has pepperoni on it." }
];

let streak = 0;
let currentPuzzle = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomPuzzle() {
    return puzzles[Math.floor(Math.random() * puzzles.length)];
}

function streakMessage() {
    if (streak === 200) return "200!";
    if (streak === 500) return "500! 👏👏👏";
    if (streak === 1000) return "You've done it, 1000!";
    if (streak > 100) return "💯💯💯";
    if (streak > 50) return "You're cheating.";
    if (streak >= 10) return "You're excellent.";
    if (streak >= 5) return "I'm proud of you.";
    if (streak >= 3) return "You're great.";
    return "Correct!";
}

function drawPuzzle() {
    console.clear();
    console.log("🎮 Emojiscrub (Terminal Edition)");
    console.log("--------------------------------");
    console.log(`🔥 Streak: ${streak}`);
    console.log("");
    console.log(`💡 Hint: ${currentPuzzle.hint}`);
    console.log("");
    console.log("Guess this:");
    console.log("");
    console.log(`   ${currentPuzzle.emoji}`);
    console.log("");
    console.log("Type 'regen' to skip this puzzle.");
    console.log("");
}

function askQuestion() {
    rl.question("Your answer: ", handleAnswer);
}

function newPuzzle() {
    currentPuzzle = randomPuzzle();
    drawPuzzle();
    askQuestion();
}

function handleAnswer(input) {
    const userInput = input.trim().toLowerCase();
    const correctAnswer = currentPuzzle.answer.toLowerCase();

    if (userInput === "regen") {
        console.log("\n🔄 Puzzle regenerated!");
        setTimeout(newPuzzle, 800);
        return;
    }

    if (userInput === correctAnswer) {
        streak++;
        console.log("\n✅ " + streakMessage());
        setTimeout(newPuzzle, 1000);
    } else {
        streak = 0;
        console.log("\n❌ Incorrect. Try again.");
        askQuestion();
    }
}

rl.on("SIGINT", () => {
    console.log("\n\n👋 Thanks for playing Emojiscrub!");
    rl.close();
    process.exit(0);
});

newPuzzle();
