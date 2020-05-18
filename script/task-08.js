"use strict"
const renderBtn = document.querySelector('#controls button[data-action="render"]');
const destroyBtn = document.querySelector('#controls button[data-action="destroy"]');
const parentBox = document.getElementById("boxes");
const counter = document.querySelector("#controls input");
const createBoxes = function (amount) {
  let boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = "#" + Math.floor(256*Math.random()).toString(16) + Math.floor(256*Math.random()).toString(16) + Math.floor(256*Math.random()).toString(16);
    box.style.width = 30 + i * 10+"px";
    box.style.height = 30 + i * 10+"px";
    boxes = [...boxes, box];
  };
  parentBox.append(...boxes);
};
const destroyBoxes = function () {
  const boxes = document.querySelectorAll("#boxes div");
  for (const box of boxes) {
    box.remove();
  }
};
renderBtn.addEventListener('click', function() {createBoxes(Number(counter.value))});
destroyBtn.addEventListener('click', destroyBoxes);