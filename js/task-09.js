const buttonChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const bodyElement = document.querySelector('body');

buttonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  textColor.textContent = newColor;
  bodyElement.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
