"use strict"
const nameField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");
const changeName = () => {
  (nameField.value === "") ? outputField.textContent = "незнакомец": outputField.textContent = nameField.value;
};
nameField.addEventListener('input', changeName);