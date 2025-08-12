// Get random computer choice
function getComputerChoice() {
  // Create variable to store random number
  const randomNumber = Math.random();

  // IF randomNumber < 0.33 return rock
  if (randomNumber < 0.33) {
    return "rock";
  }
  // ELSE IF randomNumber < 0.66 return paper
  else if (randomNumber < 0.66) {
    return "paper";
  }
  // ELSE return scissors
  else {
    return "scissors";
  }
}
