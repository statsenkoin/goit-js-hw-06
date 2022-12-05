const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');

const ingredientsList = ingredients.map((item) => {
  const itemEl = document.createElement('li');

  itemEl.classList.add('item');
  itemEl.textContent = item;

  return itemEl;
});

ingredientsContainer.append(...ingredientsList);

// // const list = document.querySelector('ul');

// // let item;

// // for (const ingredient of ingredients) {
// //   const item = document.createElement('li');
// //   item.classList.add('item');
// //   item.insertAdjacentHTML('afterbegin', ingredient);

// // // тут на кожній ітерації ти додаєш в DOM
// //   list.append(item);
// // }

// const list = document.querySelector('ul'); // краще querySelector('#ingredients')

// let item = [];

// for (const ingredient of ingredients) {
//   const newItem = document.createElement('li');
//   newItem.classList.add('item');
//   newItem.textContent = ingredient;
//   // тут ти додаєш в тимчасовий масив item новостворений <li>
//   item.push(newItem);
//   // item = [{li}, {li},...]
//   console.log(item);
// }
// // і однією дією розпилюєш в контейнер
// list.append(...item);
