"use strict"
const categoryList = Array.from(document.querySelectorAll("ul#categories>li.item"));
console.log(`В списке ${categoryList.length} категории`);
for (const category of categoryList) {
  console.log(`Категория: ${category.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${category.querySelectorAll("li").length}`);
}