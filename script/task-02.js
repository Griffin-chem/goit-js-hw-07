"use strict"
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const parent = document.querySelector("ul#ingredients");
let list = [];
for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  list = [...list, listItem];
};
parent.append(...list);