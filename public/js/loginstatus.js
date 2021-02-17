checkIfLoggedIn();

function checkIfLoggedIn() {
  let user = localStorage.getItem('loggedInUser');
  console.log(user);

  document.querySelector('#login-container').innerHTML += '<p>Hej</p>';
}
