// // ----- variant 1 - different handlers for each event listener ------------
const countResult = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {
  countResult.textContent = Number(countResult.textContent) - 1;
});
buttonIncrement.addEventListener('click', () => {
  countResult.textContent = Number(countResult.textContent) + 1;
});

// // ----- variant 2 - sending CALLBACK to event listener + if() -------------
// const countResult = document.querySelector('#value');
// const buttonDecrement = document.querySelector('[data-action="decrement"]');
// const buttonIncrement = document.querySelector('[data-action="increment"]');

// buttonDecrement.addEventListener('click', onCountButtonClicks);
// buttonIncrement.addEventListener('click', onCountButtonClicks);

// function onCountButtonClicks() {
//   let currentAction = this.dataset.action;

//   if (currentAction === 'decrement')
//     countResult.textContent = Number(countResult.textContent) - 1;
//   if (currentAction === 'increment')
//     countResult.textContent = Number(countResult.textContent) + 1;
// }

// // ----- variant 2.1 - sending CALLBACK to event listener + switch() ----------
// const countResult = document.querySelector('#value');
// const buttonDecrement = document.querySelector('[data-action="decrement"]');
// const buttonIncrement = document.querySelector('[data-action="increment"]');

// buttonDecrement.addEventListener('click', onCountButtonClicks);
// buttonIncrement.addEventListener('click', onCountButtonClicks);

// function onCountButtonClicks() {
//   let currentAction = this.dataset.action;

//   switch (currentAction) {
//     case 'decrement':
//       countResult.textContent = Number(countResult.textContent) - 1;
//       break;
//     case 'increment':
//       countResult.textContent = Number(countResult.textContent) + 1;
//       break;
//   }
// }
