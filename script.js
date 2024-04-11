let computerScore = 0;
let playerScore = 0;
let computerSelections = [];
let playerSelections = [];

// console.log('Welcome to the game');
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

function displayPlayerPicks(playerPick, computerPick) {
  const divPlayerPicks = document.querySelector('#player-picks');
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = playerPick + ' vs ' + computerPick;
  ul.appendChild(li);
  divPlayerPicks.appendChild(ul);
}

function handleRockClick() {
  playerSelections.push('rock');
  let computerChoice = getComputerChoice();
  computerSelections.push(computerChoice);
  displayPlayerPicks('rock', computerChoice);

  let winner = playRound('rock', computerChoice);
  if (winner === 'player') {
    playerScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }

  if (playerScore === 5 || computerScore === 5) {
    displayResult();
  }
}

function handlePaperClick() {
  playerSelections.push('paper');
  let computerChoice = getComputerChoice();
  computerSelections.push(computerChoice);
  displayPlayerPicks('paper', computerChoice);
  let winner = playRound('paper', computerChoice);
  if (winner === 'player') {
    playerScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }
  if (playerScore === 5 || computerScore === 5) {
    displayResult();
  }
}

function handleScissorsClick() {
  playerSelections.push('scissors');
  let computerChoice = getComputerChoice();
  computerSelections.push(computerChoice);
  displayPlayerPicks('scissors', computerChoice);
  let winner = playRound('scissors', computerChoice);
  if (winner === 'player') {
    playerScore++;
  }
  if (winner === 'computer') {
    computerScore++;
  }
  if (playerScore === 5 || computerScore === 5) {
    displayResult();
  }
}

function displayResult() {
  let winner = '';
  let winnerChoices = '';
  let losserChoices = '';
  if (computerScore > playerScore) {
    // console.log('Computer Wins by ' + computerScore);
    winner = 'Computer Wins by ' + computerScore;
    // console.log('Computer Choices :- ' + computerSelections);
    winnerChoices = 'Computer Choices :- ' + computerSelections;
    // console.log('Player Choices :- ' + playerSelections);
    losserChoices = 'Player Choices :- ' + playerSelections;
  } else if (computerScore < playerScore) {
    // console.log('You win by ' + playerScore);
    winner = 'You win by ' + playerScore;
    // console.log('Your Choices are :- ' + playerSelections);
    winnerChoices = 'Your Choices are :- ' + playerSelections;
    // console.log('Computer Choices :- ' + computerSelections);
    losserChoices = 'Computer Choices :- ' + computerSelections;
  }

  const resultsDiv = document.querySelector('#results');
  const playerResultsPara = document.createElement('p');
  const computerResultsPara = document.createElement('p');

  if (playerScore !== 0 || computerScore !== 0) {
    playerResultsPara.textContent = 'Player results : - ' + playerScore;
    computerResultsPara.textContent = 'Computer results :- ' + computerScore;

    const winnerDiv = document.querySelector('#winner');
    const winnerParagraph = document.createElement('p');
    winnerParagraph.textContent =
      // winner + '\n' + winnerChoices + '\n' + losserChoices;
      winner;
    winnerDiv.appendChild(winnerParagraph);

    winnerDiv.classList.add('winner');
  }

  resultsDiv.appendChild(playerResultsPara);
  resultsDiv.appendChild(computerResultsPara);
}

function playGame() {
  const contentDiv = document.querySelector('#content');

  const rockBtn = document.createElement('button');
  const paperBtn = document.createElement('button');
  const scissorsBtn = document.createElement('button');

  rockBtn.textContent = 'Rock';
  rockBtn.addEventListener('click', handleRockClick);

  paperBtn.textContent = 'Paper';
  paperBtn.value = 'paper';
  paperBtn.addEventListener('click', handlePaperClick);

  scissorsBtn.textContent = 'Scissors';
  scissorsBtn.value = 'scissors';
  scissorsBtn.addEventListener('click', handleScissorsClick);

  contentDiv.appendChild(rockBtn);
  contentDiv.appendChild(paperBtn);
  contentDiv.appendChild(scissorsBtn);
  displayResult();
}

playGame();
