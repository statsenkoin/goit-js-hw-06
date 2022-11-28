const sliderFontControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sliderFontControl.addEventListener('input', (e) => {
  textEl.style.fontSize = e.currentTarget.value + 'px';
});
