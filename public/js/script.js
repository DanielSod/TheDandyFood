//userArray och activeUser kan nog tas bort
const userArray = [];
let activeUser = {};

//loggedInUser sätts vid login
let loggedInUser = {
  Username: 'PandyTwo',
  Password: 'wordtwo',
  Realname: 'Andreas',
  Email: 'pandy.andytwo@dandy.se',
  Country: 'PandyLand',
  _id: 'lFYPp9qsvd3b1ido',
};

//Metod kallas på för att köras när sidan laddas.
setDefaultValues(loggedInUser);

//Test metod för att hämta upp data från ett formulär
const getInputData = () => {
  let userData = Array.from(document.querySelectorAll('#signup-form input')).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  activeUser = userData;
  userArray.push(activeUser);

  console.log(activeUser);
  console.log(userArray);

  let userNameTag = document.querySelector('#active-user');
  userNameTag.textContent = activeUser.name;
};

//Test metod för att skicka data till databas via backend
function sendData() {
  console.log('Data sent');
  const data = {
    Username: 'Boi1995',
    Password: 'hemligt123',
    Realname: 'Andreas',
    Email: 'andreas@dandy.se',
    Country: 'Sweden',
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
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
function setDefaultValues(user) {
  document.getElementById('edit-name').value = user.Realname;
  document.getElementById('edit-email').value = user.Email;
  document.getElementById('edit-country').value = user.Country;
  document.getElementById('edit-username').value = user.Username;
  document.getElementById('edit-password').value = user.Password;
}
