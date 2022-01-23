'use strict';

let newMessage = (document.querySelector('.message').textContent =
  'Correct number');

let guessedNumber = (document.querySelector('.number').textContent = 50);
let playerScore = (document.querySelector('.score').textContent = 9);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
