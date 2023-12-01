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

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// function createLi() {
//   ingredients.forEach(el => {
//     const father = document.querySelector('#ingredients');
//     const newChild = document.createElement('li');

//     father.append(newChild);
//   });
//   document.querySelectorAll('li').forEach(el => el.classList.add('item'));
// }

// createLi();

