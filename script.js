'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentHighScore = 0;
let score = 20;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

//input in check button logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number ⛔!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🍺!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (currentHighScore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 🤔' : 'Too low 🤔');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You just lost the game dum-dum 😒');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// "Again!" button logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
