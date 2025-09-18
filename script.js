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


