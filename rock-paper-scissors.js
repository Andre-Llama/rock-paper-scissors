const SELECTION = [['rock', 0], ['paper', 1], ['scissors',2]];
let playerWins = 0;
let computerWins = 0;

// randomly returns either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  return SELECTION[Math.floor(Math.random() * 3)];
}

function playRound(e) {
  let computerSelection = computerPlay();
  let playerInput = e.currentTarget.id;
  let message = "";

  if (playerInput == 'rock') {
    playerSelection = SELECTION[0];
  } else if (playerInput == 'paper') {
    playerSelection = SELECTION[1];
  } else if (playerInput == 'scissors') {
    playerSelection = SELECTION[2];
  }

  if (playerSelection == computerSelection) {
    message = `Tied! ${playerSelection[0]} and ${computerSelection[0]}`;
  } else if (playerSelection == SELECTION[0] && computerSelection == SELECTION[2] ||
    playerSelection == SELECTION[1] && computerSelection == SELECTION[0] ||
    playerSelection == SELECTION[2] && computerSelection == SELECTION[1]) {
    message = `You win! ${playerSelection[0]} beats ${computerSelection[0]}`;
    playerWins++;
  } else {
    message = `You lose! ${computerSelection[0]} beats ${playerSelection[0]}`;
    computerWins++;
  }

  const msgBoard = document.querySelector('#msgBoard');
  msgBoard.textContent = message;

  if (playerWins >= 5) {
    msgBoard.textContent = "You Win!";
  } else if (computerWins >= 5) {
    msgBoard.textContent = "Computer Wins!";
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);