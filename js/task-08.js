const formEl = document.querySelector('.login-form');
function fillForms(event) {
  event.preventDefault();

  const formDataEl = {
    email: event.currentTarget.elements['email'].value,
    password: event.currentTarget.elements['password'].value,
  };

  if (formDataEl.email === '' || formDataEl.password === '')
    alert('все поля должны быть заполнены');
  else {
    console.log(formDataEl);
    formEl.reset();
  }
}

formEl.addEventListener('submit', fillForms);
