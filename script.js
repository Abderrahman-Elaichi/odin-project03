console.log("hello world");

let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");

///computer choice

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.random() * choices.length;

  return (computerChoice = choices[Math.floor(randomIndex)]);
}


//game logic
let userScore = 0;
let computerScore = 0;

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
}

// user interaction
paper.addEventListener("click", function () {
  playRound("paper");
  updateScore();
});
rock.addEventListener("click", function () {
  playRound("rock");
  updateScore();
});
scissors.addEventListener("click", function () {
  playRound("scissors");
  updateScore();
});

//score update
let userScoreElement = document.getElementById("user-score");
let computerScoreElement = document.getElementById("computer-score");
function updateScore() {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}



//custom alert
function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}
