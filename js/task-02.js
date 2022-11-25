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
