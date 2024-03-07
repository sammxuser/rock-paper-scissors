console.log('Welcome to the game');
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelectedValue, computerSelectedValue) {
  const playerSelection = playerSelectedValue.toLowerCase();
  const computerSelection = computerSelectedValue.toLowerCase();

  //   Paper > Rock > Scissors
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    // return 'You win! Paper beats rock ';
    return 'player';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    // return 'You lose! Paper beats rock ';
    return 'computer';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    // return 'You win! Scissors beats paper ';
    return 'player';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    // return 'You lose! Scissors beats paper ';
    return 'computer';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    // return 'You win! Rock beats scissors ';
    return 'player';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    // return 'You lose! Rock beats scissors ';
    return 'computer';
  } else {
    // return 'The game is a tie! ';
    return 'draw';
  }
}

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  let computerSelections = [];
  let playerSelections = [];

  for (let index = 0; index < 5; index++) {
    let playerChoice = prompt('Make a choice(rock,paper,scissors)');
    playerSelections.push(playerChoice);
    let computerChoice = getComputerChoice();
    computerSelections.push(computerChoice);

    let winner = playRound(playerChoice, computerChoice);
    if (winner === 'player') {
      playerScore++;
    }
    if (winner === 'computer') {
      computerScore++;
    }
  }

  if (computerScore > playerScore) {
    console.log('Computer Wins by ' + computerScore);
    console.log('Computer Choices :- ' + computerSelections);
    console.log('Player Choices :- ' + playerSelections);
  } else if (computerScore < playerScore) {
    console.log('You win by ' + playerScore);
    console.log('Your Choices are :- ' + playerSelections);
    console.log('Computer Choices :- ' + computerSelections);
  }
}

playGame();
