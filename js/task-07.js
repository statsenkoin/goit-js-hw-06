const inputFontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = inputFontSizeControl.value + 'px';

inputFontSizeControl.addEventListener('input', (e) => {
  textEl.style.fontSize = e.currentTarget.value + 'px';
});
