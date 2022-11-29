const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert('Fill in all required fields');
  } else {
    const userCredentials = { email: email.value, password: password.value };
    console.log(userCredentials);

    form.reset();
  }
}

// function onFormSubmit(event) {
//   event.preventDefault();

//   const email = form.elements.email.value;
//   const password = form.elements.password.value;

//   if (!email || !password) {
//     alert('Fill in all required fields');
//   } else {
//     form.reset();
//   }
//   console.log({ email, password });
// }
