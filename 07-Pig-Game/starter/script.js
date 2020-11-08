'use strict';

//  select elements 
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');

dice.classList.add('hidden');


scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;


const diceRoll = function () {
  //  create random num 
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  //  display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNum}.png`;
}




rollBtn.addEventListener('click', diceRoll);