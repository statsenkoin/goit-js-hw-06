const inputNumber = document.querySelector('#controls>input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const initialBoxSize = 30; //square width=30px height=30px
let boxesList = [];
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
  for (let i = 1; i <= amount; i += 1) {
    let boxSize = initialBoxSize * i;

    const newBox = document.createElement('div');
    newBox.style.width = boxSize + 'px';
    newBox.style.height = boxSize + 'px';
    newBox.style.backgroundColor = getRandomHexColor();

    boxesList.push(newBox);
  }
  boxes.append(...boxesList);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  boxesList = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
