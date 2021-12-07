const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `${sizeControlEl.value}px`;
const slider = () => {
  textEl.style.fontSize = `${sizeControlEl.value}px`;
};

sizeControlEl.addEventListener('input', slider);
