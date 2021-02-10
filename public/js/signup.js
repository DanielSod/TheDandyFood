async function createUser() {
  const user = {
    Username: document.querySelector('#edit-username').value,
    Password: document.querySelector('#edit-password').value,
    Realname: document.querySelector('#edit-name').value,
    Email: document.querySelector('#edit-email').value,
    Country: document.querySelector('#edit-country').value,
    Favorites: [],
  };

  const response = await fetch(`/users`);
  const dbUsers = await response.json();

  for (const i in dbUsers) {
    if (user.Username == dbUsers[i].Username || user.Email == dbUsers[i].Email) {
      console.log('Username or Email already exists');
      break;
    }
    if (i == dbUsers.length - 1) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      };
      fetch('/users', options);
      console.log('User Created');
    }
  }
}
