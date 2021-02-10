// getRecipeData();
// getUser();

// async function getRecipeData() {
//   console.log('Trying to get data');

//   const response = await fetch('/api');
//   userArray = await response.json();
//   console.log(userArray);

//   let container = document.querySelector('.recipe-card-container');

//   for (let i = 0; i < userArray.length; i++) {
//     container.innerHTML +=
//       '<div class="recipe-card"><div>Bild</div><div class="description-container"><h1>' +
//       userArray[i].Realname +
//       '</h1><p>' +
//       userArray[i].Username +
//       '</p></div></div>';
//   }
// }

async function getRecipes() {
  let container = document.querySelector('.recipe-card-container');
  let userArray = [];
  container.innerHTML = '';
  let searchTerm = document.querySelector('#recipe-search').value;

  const response = await fetch(`/recipes/${searchTerm}`);

  const data = await response.json();

  recipeList = data;

  for (let i = 0; i < recipeList.length; i++) {
    container.innerHTML +=
      '<div class="recipe-card"><div>Bild</div><div class="description-container"><h1>' +
      recipeList[i].Title +
      '</h1><p>' +
      recipeList[i].Description +
      '</p></div></div>';
  }

  console.log(userArray);
}
