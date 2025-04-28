function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
  let randomNumber = getRandomIntInclusive(0, 2);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "Scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors': ");
  if (humanChoice === "" || humanChoice === null) return;
  const modHumanChoice = humanChoice.toLowerCase();
  return modHumanChoice.at(0).toUpperCase() + modHumanChoice.slice(1);
}

function declareWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log("Nobody won! It's a draw!");
  } else if (humanScore > computerScore) {
    console.log("Congratulations! You won!");
  } else if (computerScore > humanScore) {
    console.log("Very very sad! You lost!")
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (computerChoice === "Scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (computerChoice === "Rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (computerChoice === "Paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  }
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.textContent;
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
  });
});