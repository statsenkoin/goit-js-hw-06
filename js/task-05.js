const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const defaultOutput = nameOutputEl.textContent;

nameInputEl.addEventListener('input', onUpdateOutput);

function onUpdateOutput(event) {
  nameOutputEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : defaultOutput; // або 'Anonymous', тоді змінна defaultOutput не потрібна
}
