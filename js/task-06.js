const validationInput = document.querySelector('#validation-input');
const dataLendth = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('change', inputValidation);

function inputValidation() {
  validationInput.classList.add('invalid');

  if (validationInput.value.length === dataLendth) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  }

  if (validationInput.value === '') {
    validationInput.classList.remove('valid', 'invalid');
  }
}
