const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('LOG IN BTN CLICKED');
  
    // Collect values from the login form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      console.log('HITTING API/USERS/LOGIN')
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        // TODO: set up the profile route in controllers/homeRoutes.js
        console.log('LOGGED IN - REDIRECTING TO PROFILE');
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('SIGNUP BTN CLICKED');
  
    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (name && email && password) {
      console.log('HITTING /API/USERS WITH');
      console.log(JSON.stringify({ name, email, password }));
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
      if (response.ok) {
        // TODO: set up the profile route in controllers/homeRoutes.js
        console.log('PROFILE FOUND!');
        document.location.replace('/');
      } else {
        console.log('COULDNT SAVE LOG IN INFO!');
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#login')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('#signup')
    .addEventListener('click', signupFormHandler);
  