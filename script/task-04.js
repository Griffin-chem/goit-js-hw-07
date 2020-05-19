"use strict"
const counterBtn = document.querySelector('#counter');
// const decreaseBtn = document.querySelector('#counter button[data-action="decrement"]');
const resultField = document.querySelector('#value');
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const changeValue = ({
  target
}) => {
  counter[target.dataset.action]();
  resultField.textContent = counter.value;
}
// const increaseValue = function () {
//   value++;
//   resultField.textContent = value;
// };
// const decreaseValue = function () {
//   value--;
//   resultField.textContent = value;
// };
counterBtn.addEventListener('click', changeValue);
// decreaseBtn.addEventListener('click', changeValue);