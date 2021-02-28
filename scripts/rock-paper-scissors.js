const MAX_ROUNDS = 5;
const SELECTION = [['rock', 0], ['paper', 1], ['scissors',2]];

// randomly returns either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  return SELECTION[Math.floor(Math.random() * 3)];
}

// plays a single round of Rock Paper Scissors and declares the winner of the round
function playRound(playerSelection, computerSelection) {
  let playerInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
  computerSelection = computerPlay();
  
  if (playerInput == 'rock') {
    playerSelection = SELECTION[0];
  } else if (playerInput == 'paper') {
    playerSelection = SELECTION[1];
  } else if (playerInput == 'scissors') {
    playerSelection = SELECTION[2];
  }

  //Work in progress
  if (playerSelection == computerSelection) {
    return `Tied! ${playerSelection[0]} and ${computerSelection[0]}`;
  }
  else if (playerSelection == SELECTION[0] && computerSelection == SELECTION[2] ||
    playerSelection == SELECTION[1] && computerSelection == SELECTION[0] ||
    playerSelection == SELECTION[2] && computerSelection == SELECTION[1]) {
    return `You win! ${playerSelection[0]} beats ${computerSelection[0]}`;
  }
  
  return `You lose! ${computerSelection[0]} beats ${playerSelection[0]}`
}

// plays a 5 round game and declares the winner at the end
function game() {
  let playerSelection = [];
  let computerSelection = [];

  for (let i = 0; i < MAX_ROUNDS; i++) {
    console.log("Round " + (i + 1) + ": " + playRound(playerSelection, computerSelection));
  }
}

game();