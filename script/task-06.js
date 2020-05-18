"use strict"
const fieldToCheck = document.querySelector('#validation-input');
const checkInput = function () {
  if (fieldToCheck.value === "") {
    fieldToCheck.classList.remove("valid");
    fieldToCheck.classList.remove("invalid");
  } else if (fieldToCheck.value.length === Number(fieldToCheck.dataset.length)) {
    fieldToCheck.classList.add("valid");
    fieldToCheck.classList.remove("invalid");
  } else {
    fieldToCheck.classList.add("invalid");
    fieldToCheck.classList.remove("valid");
  };
};
fieldToCheck.addEventListener('change', checkInput);