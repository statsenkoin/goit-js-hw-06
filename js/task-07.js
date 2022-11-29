const inputFontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFontSizeControl.addEventListener('input', (e) => {
  textEl.style.fontSize = e.currentTarget.value + 'px';
});
