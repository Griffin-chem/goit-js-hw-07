"use strict"
const categoryList = document.querySelector("#categories");
const categoryNumber = categoryList.children.length;
console.log(`В списке ${categoryNumber} категории`);
const categoryContent = [...categoryList.children].map(item => `Категория: ${item.children[0].textContent}\nКоличество элементов: ${item.children[1].children.length}`).join('\n');
console.log(categoryContent);