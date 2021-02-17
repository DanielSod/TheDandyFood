async function createUser(e) {
  e.preventDefualt;

  let signupFormSpans = document.querySelectorAll('#signup-form span');

  if (signupFormSpans) {
    signupFormSpans.forEach((span) => {
      span.remove();
    });
  }

  let inputUsername = document.querySelector('#edit-username');
  let inputPassword = document.querySelector('#edit-password');
  let inputRealname = document.querySelector('#edit-name');
  let inputEmail = document.querySelector('#edit-email');
  let inputCountry = document.querySelector('#edit-country');

  let re = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);

  if (inputUsername.value.length < 1) {
    inputUsername.insertAdjacentHTML('afterend', '<span>Username must be longer</span');
  }
  if (inputRealname.value.length < 1) {
    inputRealname.insertAdjacentHTML('afterend', '<span>Input cant be empty</span');
  }
  if (re.test(inputEmail.value) == false) {
    inputEmail.insertAdjacentHTML('afterend', '<span>Email is in wrong format</span');
  }

  const user = {
    Username: inputUsername.value,
    Password: inputPassword.value,
    Realname: inputRealname.value,
    Email: inputEmail.value,
    Country: inputCountry.value,
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