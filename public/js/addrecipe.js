//let server = require('../Server/Server.js')

async function uploadrecipe() {
  console.log('Data sent');

  let user = localStorage.getItem('loggedInUser');

  var addIngredient = ['#qty'+'#unit'+'#ingredient'];
  var addingHowTo = ['#howTo'];
  var ingredientList = ('#Qty' ,'#Unit','#Ingredient');


  const recipe = {
    Title: document.querySelector("#title").value,
    Country: document.querySelector("#country").value,
    Description: document.querySelector("#description").value,
    PortionSize: document.querySelector("#portionSize").value,
    CookTime: document.querySelector("#cookTime").value,
    Signature: document.querySelector("#signature").value,

    RecPic: document.querySelector("#recPic").value,
    Difficulty: document.querySelector("#difficulty").value,
    HowTo: document.querySelector("#howTo").value,
    Ingredient: document.querySelector("#ingredient").value,
    Unit: document.querySelector("#unit").value,
    Qty: document.querySelector("#qty").value
  };

  const data = new Object(recipe);
  JSON.stringify(recipe);
  console.log(data)
}

function getAllIngredients() {
  let table = document.querySelectorAll('#addIngredientItem');
  var colQty = document.querySelectorAll('.colQty')
  var colUnit = document.querySelectorAll('.colUnit')
  var colIngred = document.querySelectorAll('.colIngred')

  console.log(table);
}

async function addIngredient() {
let table = document.querySelector('#addIngredientItem')

table.innerHTML +=
    '<tr><td><input id="qty"type="text"class="colQty"></td><td><input id="unit" type="text"class="colUnit"></td><td><input id="ingredient" type="text"class="colIngred"></td></tr>'
};


postRecipe(() => '/recipes', function()  {
  recipe: request.body,
  newrecipe._id = Math.floor(Date.now() / 1000);
  recipesDB.insert( newrecipe, function ( err, recipes) {
    if ( err ) response.status( 500 ).send( err );
    else response.sendStatus( 200 );
  });
});

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

async function getfromDB() {
  const response = await fetch(`/recipe/${recipeTemp.Title[1]}`);
  const data = await response.json();

  console.log(data);
}
