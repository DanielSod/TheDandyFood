// window.onload = function () {
//   const loginForm = document.querySelector('.login-form');
//   const loginButton = document.querySelector('#loginSubmit');

//   if (loginButton != null) {
//     loginButton.addEventListener('click', async (e) => {
//       e.preventDefault();

//       console.log('Hej');

//       const username = loginForm.username.value;
//       const password = loginForm.password.value;

//       const response = await fetch(`/users`);

//       const users = await response.json();

//       users.forEach((user) => {
//         if (username === user.Username && password === user.Password) {
//           localStorage.setItem('loggedInUser', JSON.stringify(user));
//         } else {
//           console.log('Wrong Username / Password combination');
//         }
//       });
//     });
//   }
// };

async function submitClicked() {
  const loginForm = document.querySelector('.login-form');

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  const response = await fetch(`/users`);

  const users = await response.json();
  console.log(users);

  users.forEach((user) => {
    if (username === user.Username && password === user.Password) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
      console.log('Wrong Username / Password combination');
    }
  });
}
