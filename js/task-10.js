const inputNumber = document.querySelector('#controls>input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const initialBoxSize = 30; //square width=30px height=30px
let numberOfBoxes = 0;

inputNumber.addEventListener('input', getInputValue);
buttonCreate.addEventListener('click', () => {
  createBoxes(numberOfBoxes);
});
buttonDestroy.addEventListener('click', destroyBoxes);

function getInputValue(e) {
  numberOfBoxes = Number(e.currentTarget.value);
}

function createBoxes(amount) {
  let newBox = '';
  for (let i = 1; i <= amount; i += 1) {
    let boxSize = initialBoxSize * i;
    const bgColor = getRandomHexColor();
    newBox += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${bgColor}"></div>`;
  }
  boxes.insertAdjacentHTML('beforeend', newBox);
  inputNumber.value = ''; //bugFix
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
