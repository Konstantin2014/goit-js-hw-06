const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', () => addName());

const outputEl = document.querySelector('#name-output');

function addName() {
  let name = inputEl.value;
  if (name === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = name;
  }
}
