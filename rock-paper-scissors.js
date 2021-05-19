const SELECTION = ['rock', 'paper', 'scissors'];
const msgBoard = document.querySelector('#msgBoard');
let playerWins, computerWins, buttons;

//sets up the game
function setUpGame() {
  playerWins = 0;
  computerWins = 0;
  buttons = document.querySelectorAll('button');
  msgBoard.textContent = "";

  buttons.forEach((button) => {
    button.disabled = false;
    button.addEventListener('click', playRound);
  });
}

// randomly chooses for computer
function computerPlay() {
  return SELECTION[Math.floor(Math.random() * 3)];
}

// compares the choices of the player and computer and checks if either won the game
function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = this.getAttribute('id');
  let message = "";

  let playerIndex = SELECTION.indexOf(playerSelection);
  let computerIndex = SELECTION.indexOf(computerSelection);

  if (playerIndex != computerIndex) {
    if (playerIndex == (computerIndex + 1) % 3) {
      message = `You win! ${playerSelection} beats ${computerSelection}`;
      playerWins++;
    } else {
      message = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerWins++;
    }
  } else {
    message = `Tied! ${playerSelection} and ${computerSelection}`;
  }

  msgBoard.textContent = message;

  if (playerWins == 5) {
    msgBoard.textContent = "You Win!";
    endGame();
  } else if (computerWins == 5) {
    msgBoard.textContent = "Computer Wins!";
    endGame();
  }
}

// disables the buttons to end the game
function endGame() {
  buttons.forEach((button) => {
    button.disabled = true;
  });

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Play Again';
  restartButton.addEventListener('click', setUpGame);

  msgBoard.appendChild(restartButton);
}

setUpGame();