const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('focus', (e) => {
//   e.currentTarget.value = '';
//   inputEl.classList.remove('valid', 'invalid');
// });

inputEl.addEventListener('blur', (e) => {
  if (e.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
