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
    result.textContent = "What a bummer! It's a draw!";
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Paper") {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (computerChoice === "Scissors") {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (computerChoice === "Rock") {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (computerChoice === "Paper") {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  }
}

function declareWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    winner.textContent = "Result: You have finally won!";
  } else if (computerScore === 5) {
    winner.textContent = "Result: The Computer has won!";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "";
  score.textContent = "";
  winner.textContent = "";
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Reset") {
      restartAudio.play();
      resetGame();
      return;
    }

    selectAudio.play();

    if (humanScore === 5 || computerScore === 5) {
      return;
    }

    const humanSelection = button.textContent;
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);

    score.textContent = `Score: Computer: ${computerScore} | Human: ${humanScore}`;

    declareWinner(humanScore, computerScore);
  });
});

const result = document.querySelector(".result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

const selectAudio = document.querySelector(".select");
const restartAudio = document.querySelector(".restart");