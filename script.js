///number of rounds
let round = document.getElementsByClassName("round");
let oneRound = document.getElementById("1-round");
let threeRounds = document.getElementById("3-round");
let tenRounds = document.getElementById("10-round");
let selectedRounds;
function setRounds(roundNumber) {
  selectedRounds = roundNumber;

  if (selectedRounds === 1) {
    oneRound.style.backgroundColor = "green";
    threeRounds.style.backgroundColor = "red";
    tenRounds.style.backgroundColor = "red";
    return selectedRounds;
  } else if (selectedRounds === 3) {
    oneRound.style.backgroundColor = "red";
    threeRounds.style.backgroundColor = "green";
    tenRounds.style.backgroundColor = "red";
    return selectedRounds;
  } else if (selectedRounds === 10) {
    oneRound.style.backgroundColor = "red";
    threeRounds.style.backgroundColor = "red";
    tenRounds.style.backgroundColor = "green";
    return selectedRounds;
  }
}

////check if a round is selected
function checkRoundSelected(selectedRounds) {
  if (selectedRounds === 0 || selectedRounds === undefined) {
    showEndAlert("Please select the number of rounds to startthe game.");
    return false;
  }

  return true;
}

let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");

///computer choice

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.random() * choices.length;

  return (computerChoice = choices[Math.floor(randomIndex)]);
}
function getEmojie(ComputerChoice) {
  let emojies = ["✊", "✋", "✌️"];
  emojie = emojies[["rock", "paper", "scissors"].indexOf(ComputerChoice)];

  return emojie;
}

//game logic

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  console.log("user :", userChoice);
  console.log("computer :", computerChoice);
  if (userChoice === computerChoice) {
    showAlert("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    showAlert("You win! ");
    userScore++;
  } else {
    showAlert("Computer wins!");
    computerScore++;
  }

  updateRounds();
  gameEnd();
}

// user interaction
paper.addEventListener("click", function () {
  if (!checkRoundSelected(selectedRounds)) return; // Stops the game if no round is selected
  playRound("paper");
  updateScore();
});

rock.addEventListener("click", function () {
  if (!checkRoundSelected(selectedRounds)) return; // Stops the game if no round is selected
  playRound("rock");
  updateScore();
});

scissors.addEventListener("click", function () {
  if (!checkRoundSelected(selectedRounds)) return; // Stops the game if no round is selected
  playRound("scissors");
  updateScore();
});

//update rounds
function updateRounds() {
  roundsPlayed = roundsPlayed + 1;
  roundElement.textContent = roundsPlayed;
}

//score update
let userlabel = document.getElementById("user-label");
let computerlabel = document.getElementById("computer-label");
let userScoreElement = document.getElementById("user-score");
let computerScoreElement = document.getElementById("computer-score");
let roundElement = document.getElementById("round-score");
function updateScore() {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;

  if (userScore > computerScore) {
    userlabel.style.color = "green";
    computerlabel.style.color = "red";
  } else if (computerScore > userScore) {
    computerlabel.style.color = "green";
    userlabel.style.color = "red";
  } else {
    userlabel.style.color = "black";
    computerlabel.style.color = "black";
  }
}

/// game end logic
let message = document.getElementById("endgameMessage");
function gameEnd() {
  if (roundsPlayed >= selectedRounds) {
    if (userScore > computerScore) {
      showEndAlert("you won!");
      message.style.color = "green";
    } else if (computerScore > userScore) {
      showEndAlert("you lost!");
      message.style.color = "red";
    } else {
      showEndAlert("The game ended in a tie!");
      message.style.color = "black";
    }
  }
}
//reset game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  updateScore(userScore, computerScore);
  updateRounds(roundsPlayed);
}
function refreshPage() {
  window.location.reload();
}

//custom alert
function showAlert(message) {
  document.getElementById("alertMessage").textContent = message;
  document.getElementById("pc-choice").textContent =
    "Computer chose: " + computerChoice + " " + getEmojie(computerChoice);
  document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

//end alert
function showEndAlert(message) {
  document.getElementById("endgameMessage").textContent = message;
  document.getElementById("user-final-score").textContent =
    "Your score: " + userScore;
  document.getElementById("computer-final-score").textContent =
    "Computer: " + computerScore;
  document.getElementById("endgameAlert").style.display = "block";
}

function closeEndAlert() {
  document.getElementById("endgameAlert").style.display = "none";
  resetGame();
  refreshPage();
}
