"use strict"
const nameField = document.querySelector("#name-input");
const changeName = () => {
  (nameField.value==="") ? document.querySelector("#name-output").textContent = "незнакомец" : document.querySelector("#name-output").textContent = nameField.value;
};
nameField.addEventListener('input', changeName);