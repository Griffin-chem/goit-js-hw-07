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
const list = ingredients.reduce((acc, ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  acc = [...acc, listItem];
  return acc
}, []);
parent.append(...list);