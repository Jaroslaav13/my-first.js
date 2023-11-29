// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngridients = document.querySelector('#ingredients');
const onCreatList = ingredients.map(ingridient => {
    const element = document.createElement('li');
    element.textContent = ingridient;
    element.classList.add('item');
    return element
})
listIngridients.append(...onCreatList);

