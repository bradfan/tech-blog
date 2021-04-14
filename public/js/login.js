const loginFormHandler = async (event) => {
  alert("test from login js");
  event.preventDefault();

  const userName = document.querySelector("#user").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (userName && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    // if (response.ok) {
    //   // document.location.replace('/');
    // } else {
    console.log(await response.json());
    //   alert('Failed to log in');
    // }
  }
};

// add loginSignUp function
const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#user").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (userName && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log(await response.json());
      alert("Failed to log in");
    }
  }
};

// add qselector, event listener to new button on handlebars
document.querySelector("#login").addEventListener("click", loginFormHandler);

// add qselector, event listener to new button on handlebars
document.querySelector("#signup").addEventListener("click", signupFormHandler);

// login.js works with userRoutes.js and login.handlenbars
