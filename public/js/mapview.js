async function getRecipes() {
  let container = document.querySelector('.recipe-card-container');
  let userArray = [];
  container.innerHTML = '';
  let searchTerm = document.querySelector('#recipe-search').value;

  const response = await fetch(`/recipes/${searchTerm}`);

  const data = await response.json();

  recipeList = data;

  for (let i = 0; i < recipeList.length; i++) {
    clickedRecipe = recipeList[i];
    container.innerHTML +=
      '<a href="recipeDetail.html"><div class="recipe-card" onclick="setRecipe(clickedRecipe)"><div>Bild</div><div class="description-container"><h1>' +
      recipeList[i].Title +
      '</h1><p>' +
      recipeList[i].Description +
      '</p></div></div></a>';
  }

  console.log(userArray);
}

function setRecipe(clickedRecipe) {
  localStorage.setItem('clickedRecipe', JSON.stringify(clickedRecipe));
}
