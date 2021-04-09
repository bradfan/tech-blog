const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (userName && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(await response.json());
      alert('Failed to log in');
    }
  }
};
// add loginSignUp function

// submit to signup instead of login
const signupFormHandler = ( ) => {};

document
  .querySelector('#login')
  .addEventListener('click', loginFormHandler);
  // add qselector, event listener to new button on handlebars

  // login.js works with userRoutes.js and login.handlenbars
