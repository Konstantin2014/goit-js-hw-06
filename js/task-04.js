const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const counterValueSubtract = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
decrementEl.addEventListener('click', counterValueSubtract);

const counterValueAdd = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
incrementEl.addEventListener('click', counterValueAdd);
