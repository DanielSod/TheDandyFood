//let server = require('../Server/Server.js')



let recipeTemp = {
  Description: 'Kan detta funka',
  Difficulty: '1',
  Howto: 'Lägg det på bordet och hacka',
  Ingredients: 'mjöl',
  PortionSize: '1',
  Qty: '1',
  Rating: '1',
  Recpic: 'en bild',
  Signature: 'signatur',
  Time: '12',
  Title: '1kg mjöl',
  Unit: 'kg',
};

async function fillfromWeb() {
  console.log('Data sent');
  
  
  let user = localStorage.getItem('loggedInUser');

  
  let recipe = {
    Description: document.querySelector('#description').value,
    Difficulty: document.querySelector('#difficulty').value,
    Howto: document.querySelector('#howto').value,
    Ingredients: document.querySelector('#ingredients').value,
    PortionSize: document.querySelector('#portionSize').value,
    Qty: document.querySelector('#qty').value,
    Rating: document.querySelector('#rating').value,
    Recpic: document.querySelector('#recpic').value,
    Signature: user.Username,
    Time: document.querySelector('#time').value,
    Title: document.querySelector('#title').value,
    Unit: document.querySelector('#unit').value,
  };

  //   recipe = recipeTemp;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  };
  fetch('/recipes', options);
}

async function getfromDB() {
  const response = await fetch(`/recipe/${recipeTemp.Title}`);
  const data = await response.json();

  console.log(data);
}

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image');
      output.src = reader.result;
    }
  reader.readAsDataURL(event.target.files[0]);
}

async function assignsignature() {
sign = loggedInUser.Username;
}

// async function loadstuff(){
//     console.log('Trying to get data');
//     const response = await fetch('/api');

//     const data = await response.json();
//     console.log(data);
// }

// async function blabla() {
//         const response = await fetch(`/api/${recipeTemp.Title}`);
//         const data = await response.json();
//         console.log(data);
//     }
