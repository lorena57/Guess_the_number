'use strict';

// let newMessage = (document.querySelector('.message').textContent =
//   'Correct number');

// let guessedNumber = (document.querySelector('.number').textContent = 50);
// let playerScore = (document.querySelector('.score').textContent = 9);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number selected';
  }
});
