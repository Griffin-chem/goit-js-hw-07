"use strict"
const fontSizeController = document.querySelector("#font-size-control");
const changeFontSize = function () {
  document.querySelector("#text").style.fontSize = fontSizeController.value + "px";
};
fontSizeController.addEventListener('change', changeFontSize);