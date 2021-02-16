async function createUser(e) {
  e.preventDefualt;

  let signupFormSpans = document.querySelectorAll('#signup-form span');

  console.log(document.querySelectorAll('#signup-form span'));

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

  // let emailInput = inputEmail.value;
  // let re = new RegExp(
  //   "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])).){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])"
  // );

  // re.test(emailInput);

  if (inputUsername.value.length < 1) {
    inputUsername.insertAdjacentHTML('afterend', '<span>Username must be longer</span');
  }
  if (inputRealname.value.length < 1) {
    inputRealname.insertAdjacentHTML('afterend', '<span>Input cant be empty</span');
  }
  if (inputEmail.value.length < 1) {
    inputEmail.insertAdjacentHTML('afterend', '<span>Username must be longer</span');
  }
  if (inputCountry.value.length < 1) {
    inputCountry.insertAdjacentHTML('afterend', '<span>Username must be longer</span');
  }

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
