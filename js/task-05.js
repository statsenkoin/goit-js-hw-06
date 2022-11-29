const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onUpdateOutput);

const defaultOutput = nameOutputEl.textContent;

function onUpdateOutput(event) {
  nameOutputEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : defaultOutput; // або 'Anonymous', тоді змінна defaultOutput не потрібна
}
