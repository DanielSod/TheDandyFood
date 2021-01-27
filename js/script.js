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
