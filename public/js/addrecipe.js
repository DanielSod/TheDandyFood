//let server = require('../Server/Server.js')

const { FileArray } = require("express-fileupload");




async function uploadrecipe() {
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
    Recpic: document.querySelector('#piclink').value,
    Signature: user.Username,
    Time: document.querySelector('#time').value,
    Title: document.querySelector('#title').value,
    Unit: document.querySelector('#unit').value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  };
  fetch('/recipes', options);
}


var IngredientstoCook = Array();
Ingredients.entries(Qty, Unit, Ingredients);

var HowtoCook = Array();
Howto.entries(Howto);