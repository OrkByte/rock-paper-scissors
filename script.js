let humanScore = 0;
let computerScore = 0;

function playGame() {
  let output = "Final result: ";

  for (let i = 1; i < 6; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }

  if (humanScore === computerScore) {
    output += "Draw";
  } else {
    output += humanScore > computerScore ? "You won!" : "Computer won!"
  }

  printResult(output);
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

  printResult(output);
}

function printResult(result) {
  console.log(result);
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

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ").toLowerCase();
  let firstLetter = humanChoice[0];
  return humanChoice.replace(firstLetter, firstLetter.toUpperCase());
}

playGame();