

function sendData() {
    console.log('Data sent');

    const user = {
    Username: document.querySelector('#edit-name').value,
    Password: document.querySelector('#edit-email').value,
    Realname: document.querySelector('#edit-country').value,
    Email: document.querySelector('#edit-username').value,
    Country: document.querySelector('#edit-password').value,
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



async function getSingleRecipe() {
    const response = await fetch(`/api/${recipe.Username}`);

    const data = await response.json();

    console.log(data);
}