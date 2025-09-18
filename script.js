function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3); 
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice()); 

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase(); // make it case-insensitive
}

console.log(getHumanChoice()); // test it


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(`Round ${i+1}: Human ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

playGame();

