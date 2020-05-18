"use strict"
const increaseBtn = document.querySelector('#counter button[data-action="increment"]');
const decreaseBtn = document.querySelector('#counter button[data-action="decrement"]');
let value = Number(document.querySelector('#value').textContent);
const increaseValue = function () {
  value++;
  document.querySelector('#value').textContent = value;
};
const decreaseValue = function () {
  value--;
  document.querySelector('#value').textContent = value;
};
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);