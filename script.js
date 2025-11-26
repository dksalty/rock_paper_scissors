const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const roundDiv = document.getElementById('round');
const beatsDiv = document.getElementById('beats');
const scoreDiv = document.getElementById('score');
const score2Div = document.getElementById('score2');
const tieScoreDiv = document.getElementById('tie');
const gameEnd = document.getElementById('gameEnd');
const resetButton = document.getElementById('reset');

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;
let tie = 0;
let round = 1;

function updateDisplay() {
  scoreDiv.textContent = 'Your score: ' + humanScore;
  score2Div.textContent = 'Computer score: ' + computerScore;
  tieScoreDiv.textContent = 'Ties: ' + tie;
  roundDiv.textContent = 'Round ' + round + '!';
}

function endGame() {
  rockButton.remove();
  paperButton.remove();
  scissorsButton.remove();
  roundDiv.remove();
  beatsDiv.remove();

  if (humanScore > computerScore) {
    gameEnd.textContent = "YOU WIN!";
  } else if (computerScore > humanScore) {
    gameEnd.textContent = "COMPUTER WINS!";
  } else {
    gameEnd.textContent = "IT'S A TIE!";
  }
}

function playRound(human, computer) {

  if (human === computer) {
    tie++;
    beatsDiv.textContent = `Computer also chose ${computer}! Tie!`;
  } 
  else if (
    (human === 'Rock' && computer === 'Scissors') ||
    (human === 'Paper' && computer === 'Rock') ||
    (human === 'Scissors' && computer === 'Paper')
  ) {
    humanScore++;
    beatsDiv.textContent = `${human} beats ${computer}! You win!`;
  } 
  else {
    computerScore++;
    beatsDiv.textContent = `${computer} beats ${human}! Computer wins!`;
  }

  updateDisplay();
}

function handleClick(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  round++;
  updateDisplay();

  if (round > 5) {
    endGame();
  }
}

rockButton.addEventListener('click', () => handleClick('Rock'));
paperButton.addEventListener('click', () => handleClick('Paper'));
scissorsButton.addEventListener('click', () => handleClick('Scissors'));

resetButton.addEventListener('click', () => window.location.reload());






