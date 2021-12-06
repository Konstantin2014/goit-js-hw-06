function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColor = document.querySelector('button.change-color');

function colorChange() {
  const colorPicker = getRandomHexColor();
  bodyEl.style.backgroundColor = colorPicker;
  colorEl.textContent = colorPicker;
}

changeColor.addEventListener('click', colorChange);
