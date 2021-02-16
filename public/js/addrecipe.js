//let server = require('../Server/Server.js')

// let recipeTemp = {
//   Description: 'Kan detta funka',
//   Difficulty: '1',
//   Howto: 'Lägg det på bordet och hacka',
//   Ingredients: 'mjöl',
//   PortionSize: '1',
//   Qty: '1',
//   Rating: '1',
//   Recpic: 'en bild',
//   Signature: 'signatur',
//   Time: '12',
//   Title: '1kg mjöl',
//   Unit: 'kg',
// };


async function uploadrecipe() {
  console.log('Data sent');

  let user = localStorage.getItem('loggedInUser');
  let recipePicture = document.querySelector('#imgthumbnail');

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

function picture() {
  '#thumbnail'.on('change', function () {
    var file = $(this).get(0).files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.addEventListener('load', function (e) {
      var image = e.target.result;
      '#recpic'.attr('src', image);
    });
  });
}

function addIngredient() {
  let table = document.querySelector('#ingredientTable');

  table.innerHTML +=
    '<td><input id="qty" type="text" value="" placeholder="qty" class="colqty"></td><td><input id="unit" type="text" value="" placeholder="unit" class="colunit"></td><td><input id="ingredients" type="text" value="hej" placeholder="Ingredients"class="colingred"></td>';
}

function getAllIngredients() {
  let table = document.querySelector('#ingredientTable');

  console.log(table);
}
