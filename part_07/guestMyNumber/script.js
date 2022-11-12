"use strict";

// DOM and DOM methods are part of the web API's

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    console.log({ secretNumber }, { guess });

    if (!guess) {
        displayMessage("😜 No number");
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;

        displayMessage("🎉 Correct Number");

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        highScore = score > highScore ? score : highScore;
        document.querySelector(".highscore").textContent = highScore;
    } else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber
                ? displayMessage("🤷‍♀️ Too high!")
                : displayMessage("🤷‍♀️ Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 Game Over");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
});
