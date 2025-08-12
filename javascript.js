// Get random computer choice
function getComputerChoice() {
  // Create variable to store random number
  const randomNumber = Math.random();

  // IF randomNumber < 1/3 return rock
  if (randomNumber < 1 / 3) {
    return "rock";
  }
  // ELSE IF randomNumber < 2/3 return paper
  else if (randomNumber < 2 / 3) {
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
  // Convert input to lower case to make humanChoice case-insensitive
  input = input.toLowerCase();

  return input;
}

// Create playGame function to include playRound function and 2 score variables
function playGame() {
  // Create variable to store human and computer score
  let humanScore = 0;
  let computerScore = 0;

  // Create function receive human choice and computer choice as parameter
  function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations
    humanChoice = humanChoice.toLowerCase();
    // IF human choice and computer choice are the same print "Tied! Both chose humanChoice"
    if (humanChoice === computerChoice) {
      console.log(`Tied! Both chose ${humanChoice}`);
      return "tie";
    }
    // ELSE IF human choice is rock
    else if (humanChoice === "rock") {
      // IF computer choice is paper increases computer's score by 1 and print "You lose! Paper beats Rock"
      if (computerChoice === "paper") {
        ++computerScore;
        console.log("You lose! Paper beats Rock");
        return "lose";
      }
      // ELSE increases human's score by 1 and print "You win! Rock beats Scissors"
      else {
        ++humanScore;
        console.log("You win! Rock beats Scissors");
        return "win";
      }
    }
    // ELSE IF human choice is paper
    else if (humanChoice === "paper") {
      // IF computer choice is scissors increases computer's score by 1 and print "You lose! Scissors beat Paper"
      if (computerChoice === "scissors") {
        ++computerScore;
        console.log("You lose! Scissors beat Paper");
        return "lose";
      }
      // ELSE increases human's score by 1 and print "You win! Paper beats Rock"
      else {
        ++humanScore;
        console.log("You win! Paper beats Rock");
        return "win";
      }
    }
    // ELSE IF human choice is scissors
    else if (humanChoice === "scissors") {
      // IF computer choice is rock increases computer's score by 1 and print "You lose! Rock beats Scissors"
      if (computerChoice === "rock") {
        ++computerScore;
        console.log("You lose! Rock beats Scissors");
        return "lose";
      }
      // ELSE return increases human's score by 1 and print "You win! Scissor beat Paper"
      else {
        ++humanScore;
        console.log("You win! Scissors beat Paper");
        return "win";
      }
    }
  }

  // Call playRound 5 times
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  // Print the winner of the game base on the final score
  if (humanScore === computerScore) {
    console.log(
      `Final score - You: ${humanScore} | Computer: ${computerScore}\nYou and computer are tied!`
    );
    return "tie";
  } else if (humanScore > computerScore) {
    console.log(
      `Final score - You: ${humanScore} | Computer: ${computerScore}\nCongratulation! You won!`
    );
    return "win";
  } else {
    console.log(
      `Final score - You: ${humanScore} | Computer: ${computerScore}\nUnlucky! You lost!`
    );
    return "lose";
  }
}

// Launch the game
playGame();
