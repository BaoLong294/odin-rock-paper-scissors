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

// Get the human choice
function getHumanChoice() {
  // Displays a prompt asking the player to enter "rock", "paper" or "scissors"
  let input = prompt("Choose rock, paper or scissors: ");
  // Covert input to lower case to make humanChoice case-insensitive
  input = input.toLowerCase();

  return input;
}
