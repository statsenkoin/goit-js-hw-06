const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (e) => {
  inputEl.classList.add('invalid');
  e.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.replace('invalid', 'valid')
    : inputEl.classList.replace('valid', 'invalid');
});

// inputEl.addEventListener('blur', (e) => {
//   if (e.currentTarget.value.length === Number(inputEl.dataset.length)) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   }
// });
