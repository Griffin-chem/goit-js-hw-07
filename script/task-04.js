"use strict"
const increaseBtn = document.querySelector('#counter button[data-action="increment"]');
const decreaseBtn = document.querySelector('#counter button[data-action="decrement"]');
const resultField = document.querySelector('#value');
let value = Number(resultField.textContent);
const increaseValue = function () {
  value++;
  resultField.textContent = value;
};
const decreaseValue = function () {
  value--;
  resultField.textContent = value;
};
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);