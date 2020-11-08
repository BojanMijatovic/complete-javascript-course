'use strict';

//  select elements 
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');
const scores = [0, 0];

dice.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;


const diceRoll = function () {
  //  create random num 
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  //  display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    //  add dice  to current score
    currentScore += diceNum;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
  }
}




rollBtn.addEventListener('click', diceRoll);