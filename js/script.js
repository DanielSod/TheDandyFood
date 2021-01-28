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

const sendData = () => {
  console.log('Data sent');
  const data = {
    Username: 'PandyTwo',
    Password: 'wordtwo',
    Realname: 'Pandystwo',
    Email: 'pandy.andytwo@dandy.se',
    Country: 'PandyLand',
  };


  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch('/api', options);

};

