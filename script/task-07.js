"use strict"
const fontSizeController = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");
const changeFontSize = function () {
  textField.style.fontSize = fontSizeController.value + "px";
};
fontSizeController.addEventListener('change', changeFontSize);