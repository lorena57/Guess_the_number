'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let guessedNumber = (document.querySelector('.number').textContent =
  secretNumber);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number selected';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Number too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Number too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
