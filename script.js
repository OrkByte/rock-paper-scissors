// ui
const btnRock = document.querySelector("#btnRock");
const btnScissors = document.querySelector("#btnScissors");
const btnPaper = document.querySelector("#btnPaper");
const divResultRound = document.querySelector("#divResultRound");
const divResultFinal = document.querySelector("#divResultFinal");
const divHumanScore = document.querySelector("#divHumanScore");
const divComputerScore = document.querySelector("#divComputerScore");

btnRock.addEventListener("click", (e) => playGame(e.target.innerText));
btnScissors.addEventListener("click", (e) => playGame(e.target.innerText));
btnPaper.addEventListener("click", (e) => playGame(e.target.innerText));

// game logic
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const TOTAL_ROUNDS = 5;

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultRound = playRound(computerChoice, humanChoice);
  
  if (currentRound <= TOTAL_ROUNDS) {
    displayResultRound(resultRound);
  } 
  
  if (currentRound === TOTAL_ROUNDS) {
    displayResultFinal();
    currentRound = 0;
  }

  currentRound += 1;
}

function displayResultRound(resultRound) {
  divResultRound.innerText = `Round ${currentRound}: ${resultRound}`;
  divComputerScore.innerText = "Computer score: " + computerScore;
  divHumanScore.innerText = "Human score: " + humanScore;
}

function displayResultFinal() {
  let output = "Final result: ";

  if (humanScore === computerScore) {
    output += "Draw!";
  } else {
    output += humanScore > computerScore ? "You won!" : "Computer won!"
  }

  divResultFinal.innerText = output;
}

function playRound(computerChoice, humanChoice) {
  const winPhrase = "You win!";
  const loosePhrase = "You loose!";
  let output = "Draw";

  if (hasComputerWon(computerChoice, humanChoice)) {
    output = `${loosePhrase} ${computerChoice} beats ${humanChoice}!`;
    computerScore++;
  } else if (hasHumanWon(computerChoice, humanChoice)) {
    output = `${winPhrase} ${humanChoice} beats ${computerChoice}!`;
    humanScore++;
  }

  return output;
}

function hasComputerWon(computerChoice, humanChoice) {
  return (computerChoice === "Scissors" && humanChoice === "Paper") || 
    (computerChoice === "Paper" && humanChoice === "Rock") || 
    (computerChoice === "Rock" && humanChoice === "Scissors");
}

function hasHumanWon(computerChoice, humanChoice) {
  return (humanChoice === "Scissors" && computerChoice === "Paper") || 
    (humanChoice === "Paper" && computerChoice === "Rock") || 
    (humanChoice === "Rock" && computerChoice === "Scissors");
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber === 1 
    ? "Rock" : randomNumber === 2 
    ? "Scissors" : "Paper"
}