async function submitClicked(e) {
  e.preventDefault();
  console.log('In function', e);
  const loginForm = document.querySelector('.login-form');

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  const response = await fetch(`/users`);
  const users = await response.json();
  console.log(users);

  users.forEach((user) => {
    if (username === user.Username && password === user.Password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    } else {
      console.log('False');
      console.log('Wrong Username / Password combination');
      return false;
    }
  });

  // if (userExists == false) {
  //   console.log("User Not existing");
  //   e.preventDefault();
  // }
}
