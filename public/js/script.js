const userArray = [];
let activeUser = {};

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

document.querySelector('#active-user').addEventListener('click', sendData);

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

async function getData() {
  console.log('Trying to get data');

  const response = await fetch('/api');
  const data = await response.json();
  console.log(data);
}

async function getSingleUser() {
  console.log('Getting User');

  const response = await fetch('/api/Boi1995');

  const data = await response.json();
  console.log(data);
}
