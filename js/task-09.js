const buttonChangeColor = document.querySelector('.change-color');
const textBgColor = document.querySelector('.color');
const body = document.querySelector('body');

buttonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  textBgColor.textContent = newColor;
  body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
