
const palyerChocies = ["Rock", "Paper", "Scissors"];
const palyerChociesImg = ["🪨", "📄", "✂️"];
var playerChoice = "";
var computerChoice = "";
let pScore = 0;
let cScore = 0;

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
        updateScore();
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
        }
    });
}

function decideTheWinner(computer, player) {
    let result = document.getElementById("result");

    if (computer === player) {
        result.innerText = "Tie";
    }
    if (computer === "Rock" && player === "Scissors") {
        result.innerText = "YOU LOSE";
        cScore++;
    }

    if (computer === "Scissors" && player === "Paper") {
        result.innerText = "YOU LOSE";
        cScore++;
    }

    if (computer === "Paper" && player === "Rock") {
        result.innerText = "YOU LOSE";
        cScore++;
    }

    if (computer === "Scissors" && player === "Rock") {
        result.innerText = "YOU Win";
        pScore++;
    }

    if (computer === "Paper" && player === "Scissors") {
        result.innerText = "YOU Win";
        pScore++;
    }

    if (computer === "Rock" && player === "Paper") {
        result.innerText = "YOU Win";
        pScore++;
    }
}

function computerChoices() {
    const computerResult = document.getElementById("computerChoice");
    const computerResultImg = document.getElementById("computerChoiceImg");
    const rand = Math.floor(Math.random() * palyerChocies.length);
    const ran = palyerChocies[rand];
    const ran1 = palyerChociesImg[rand];
    computerChoice = ran;
    console.log(ran);
    computerResultImg.innerText = ran1;
    return computerResult.innerText = ran;
}

const palyAgain = document.getElementById("playAgain");

palyAgain.addEventListener("click", function () {
    window.location.reload();
});

function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
}

function checkWinner() {
    if (pScore === 5 || cScore === 5) {
        const winner =
            pScore === 5
                ? "You win the game! Congratulations!"
                : "You Lose";
        const ale = document.getElementById("alert");
        ale.style.display = "block";
        ale.style.backgroundColor = pScore === 5
            ? "green"
            : "red";
        ale.innerText = winner;
        return true;
    }
    return false;
}

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}