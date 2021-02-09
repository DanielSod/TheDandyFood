//loggedInUser sätts vid login
let loggedInUser = {
  Username: 'AndyTest',
  Password: 'wordtwo',
  Realname: 'Andreas',
  Email: 'pandy.andytwo@dandy.se',
  Country: 'PandyLand',
  _id: 'lFYPp9qsvd3b1ido',
};

//Metod kallas på för att köras när sidan laddas.
// setDefaultValues(loggedInUser);

//Test metod för att skicka data till databas via backend
function sendData() {
  console.log('Data sent');

  const user = {
    Username: document.querySelector('#edit-username').value,
    Password: document.querySelector('#edit-password').value,
    Realname: document.querySelector('#edit-name').value,
    Email: document.querySelector('#edit-email').value,
    Country: document.querySelector('#edit-country').value,
    Favorites: [],
  };

  console.log(user);

  loggedInUser = user;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  fetch('/api', options);
}

//Testmetod för att hämta all data från databasen via backend
async function getData() {
  console.log('Trying to get data');

  const response = await fetch('/api');
  const data = await response.json();
  console.log(data);
}

//Testmetod för att hämta en specifik användare från databasen via backend.
async function getSingleUser() {
  const response = await fetch(`/api/${loggedInUser.Username}`);

  const data = await response.json();

  console.log(data);
}

//Metod för att sätta värden till formulär på edit profile sidan.
// function setDefaultValues(user) {
//   document.querySelector('#edit-name').value = user.Realname;
//   document.querySelector('#edit-email').value = user.Email;
//   document.querySelector('#edit-country').value = user.Country;
//   document.querySelector('#edit-username').value = user.Username;
//   document.querySelector('#edit-password').value = user.Password;
// }

const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('#loginSubmit');

loginButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  const response = await fetch(`/users`);

  const users = await response.json();

  users.forEach((user) => {
    if (username === user.Username && password === user.Password) {
      loggedInUser = user;
    } else {
      console.log('Wrong Username / Password combination');
    }
  });

  console.log(loggedInUser);
});
