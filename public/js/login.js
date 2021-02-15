async function submitClicked(e) { 
 
    e.preventDefault();
    const loginForm = document.querySelector('.login-form');

    const username = loginForm.username.value;
    const password = loginForm.password.value;
  
    const response = await fetch(`/users`);
    const users = await response.json();
    console.log(users);
  
  let userExists = false;

  users.forEach((user) => {
    if (username === user.Username && password === user.Password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      userExists = true;      
    } else {
      console.log('Wrong Username / Password combination');
    }
  });

  // if (userExists == false) {
  //   console.log("User Not existing");
  //   e.preventDefault();
  // }
}
