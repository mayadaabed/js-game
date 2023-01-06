
const palyerChocies = ["Rock", "Paper", "Scissors"];
const palyerChociesImg = ["🪨", "📄", "✂️"];
var playerChoice = "";
var computerChoice = "";

const buttonsContainer = document.getElementById("button-choice");

for (var i = 0; i < palyerChocies.length; i++) {
    const button = document.createElement("button");
    button.innerText = palyerChocies[i];
    button.className = palyerChocies[i];
    buttonsContainer.appendChild(button);
    events(button, i);
}

function events(button, i) {
    const playerResult = document.getElementById("palyerChoice");
    const playerResultImg = document.getElementById("palyerChoiceImg");
    button.addEventListener("click", function () {
        playerResult.innerText = palyerChocies[i];
        playerResultImg.innerText = palyerChociesImg[i];
        playerChoice = palyerChocies[i];
        computerChoices();
        decideTheWinner(computerChoice, playerChoice);
    });
}

function decideTheWinner(computer, player) {
    let result = document.getElementById("result");

    if (computer === player) {
        result.innerText = null;
    }
    if (computer === "Rock" && player === "Scissors") {
        result.innerText = "YOU LOSE";
    }

    if (computer === "Scissors" && player === "Paper") {
        result.innerText = "YOU LOSE";
    }

    if (computer === "Paper" && player === "Rock") {
        result.innerText = "YOU LOSE";
    }

    if (computer === "Scissors" && player === "Rock") {
        result.innerText = "YOU Win";
    }

    if (computer === "Paper" && player === "Scissors") {
        result.innerText = "YOU Win";
    }

    if (computer === "Rock" && player === "Paper") {
        result.innerText = "YOU Win";
    }
}

function computerChoices() {
    const computerResult = document.getElementById("computerChoice");
    const computerResultImg = document.getElementById("computerChoiceImg");
    const rand = Math.floor(Math.random()* palyerChocies.length);
    const ran = palyerChocies[rand];
    const ran1 = palyerChociesImg[rand];
    computerChoice = ran;
    console.log(ran);
    computerResultImg.innerText = ran1;
    return computerResult.innerText = ran;
}

const palyAgain = document.getElementById("playAgain");

palyAgain.addEventListener("click", function (){
    window.location.reload();
});