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

// Create variable to store human and computer score
let humanScore = 0;
let computerScore = 0;

const currentScore = document.querySelector(".currentScore");
const resultDiv = document.querySelector(".result");
const finalResult = document.querySelector(".finalResult");

// Create function receive human choice and computer choice as parameter
function playRound(humanChoice, computerChoice) {
  // Make humanChoice case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations
  humanChoice = humanChoice.toLowerCase();
  // IF human choice and computer choice are the same print "Tied! Both chose humanChoice"
  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Tied! Both chose ${humanChoice}`;
  }
  // ELSE IF human choice is rock
  else if (humanChoice === "rock") {
    // IF computer choice is paper increases computer's score by 1 and print "You lose! Paper beats Rock"
    if (computerChoice === "paper") {
      ++computerScore;
      resultDiv.textContent = "You lose! Paper beats Rock";
    }
    // ELSE increases human's score by 1 and print "You win! Rock beats Scissors"
    else {
      ++humanScore;
      resultDiv.textContent = "You win! Rock beats Scissors";
    }
  }
  // ELSE IF human choice is paper
  else if (humanChoice === "paper") {
    // IF computer choice is scissors increases computer's score by 1 and print "You lose! Scissors beat Paper"
    if (computerChoice === "scissors") {
      ++computerScore;
      resultDiv.textContent = "You lose! Scissors beat Paper";
    }
    // ELSE increases human's score by 1 and print "You win! Paper beats Rock"
    else {
      ++humanScore;
      resultDiv.textContent = "You win! Paper beats Rock";
    }
  }
  // ELSE IF human choice is scissors
  else if (humanChoice === "scissors") {
    // IF computer choice is rock increases computer's score by 1 and print "You lose! Rock beats Scissors"
    if (computerChoice === "rock") {
      ++computerScore;
      resultDiv.textContent = "You lose! Rock beats Scissors";
    }
    // ELSE return increases human's score by 1 and print "You win! Scissor beat Paper"
    else {
      ++humanScore;
      resultDiv.textContent = "You win! Scissors beat Paper";
    }
  }

  currentScore.textContent = `Current score: User ${humanScore} | Computer ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) finalResult.textContent = "Congratulation! You won!";
    else finalResult.textContent = "Unlucky! You lost!";
  }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
