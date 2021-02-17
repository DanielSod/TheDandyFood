// const { table } = require('console');

//let server = require('../Server/Server.js')
async function uploadrecipe() {
  console.log('Data sent');

  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log(user.Username);

  var addIngredient = ['#qty' + '#unit' + '#ingredient'];
  var addingHowTo = ['#howTo'];
  var ingredientList = ('#Qty', '#Unit', '#Ingredient');

  const recipe = {
    Title: document.querySelector('#title').value,
    Country: document.querySelector('#country').value,
    Description: document.querySelector('#description').value,
    PortionSize: document.querySelector('#portionSize').value,
    CookTime: document.querySelector('#cookTime').value,
    Signature: user.Username,
    RecPic: document.querySelector('#recPic').value,
    Difficulty: document.querySelector('#difficulty').value,
    HowTo: document.querySelector('#howTo').value,
    Ingredient: document.querySelector('#ingredient').value,
    Unit: document.querySelector('#unit').value,
    Qty: document.querySelector('#qty').value,
  };
  console.log(recipe);

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(recipe),
  // };
  // fetch('/recipes', options);

  // const data = new Object(recipe);
  // JSON.stringify(recipe);
  // console.log(data);
}

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

// TODO; //--!!!:: //Rör ej koden ovanför här ::!!!--TODO
// //_____________________________________________________

// TODO; //ingredientArray och How To Arraya

function createIngredientArr() {
  let ingredientArray = [];
  this.Ingredient.ingredientArray.append(Ingredient);
  ingredientArray = document.querySelector('#ingredientTable');

  ingredientArray.innerHtml +=
    '<td><input id="qty" type="text" class="colqty"></td><td><input id="unit" type="text" class="colunit"></td><td><input id="ingredients" type="text" class="colingred"></td>';
}

function addHowToCookRows() {
  let howToArr = [];

  howToArr.innerHtml += '<tr><td><input type="text" id="howTo"></input></td></tr>';
}

function displayIngredientArr() {
  return ingredientArray;
}

function displayHowToArr() {
  return ingredientArray;
}

// TODO: addIngredient
//  async function addIngredient() {
// let table = document.querySelector('#addIngredientItem')

// table.innerHTML +=
//     '<tr><td><input id="qty"type="text"class="colQty"></td><td><input id="unit" type="text"class="colUnit"></td><td><input id="ingredient" type="text"class="colIngred"></td></tr>'
// };

// TODO: showIngredientList && howToList
// function getAllIngredients() {
//   let table = document.querySelectorAll('#addIngredientItem');
//   var colQty = document.querySelectorAll('.colQty')
//   var colUnit = document.querySelectorAll('.colUnit')
//   var colIngred = document.querySelectorAll('.colIngred')

//   console.log(table);
// }

// TODO: postRecipe
// postRecipe(() => '/recipes', function()  {
//   recipe: request.body,
//   newrecipe._id = Math.floor(Date.now() / 1000);
//   recipesDB.insert( newrecipe, function ( err, recipes) {
//     if ( err ) response.status( 500 ).send( err );
//     else response.sendStatus( 200 );
//   });
// });

// async function getfromDB() {
//   const response = await fetch(`/recipe/${recipeTemp.Title[1]}`);
//   const data = await response.json();

//   console.log(data);
// }
