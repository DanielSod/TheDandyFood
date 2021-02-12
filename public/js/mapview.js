async function getRecipes() {
  let container = document.querySelector('.recipe-card-container');
  container.innerHTML = '';
  let searchTerm = document.querySelector('#recipe-search').value;

  let recipeList = [];

  const response = await fetch(`/recipes/${searchTerm}`);

  const data = await response.json();
  console.log(data);

  recipeList = data;

  for (let i = 0; i < recipeList.length; i++) {
    clickedRecipe = recipeList[i];
    console.log(clickedRecipe._id);
    container.innerHTML +=
      '<div class="recipe-card" onclick="setRecipe(clickedRecipe)"><div>Bild</div><div class="description-container"><h1>' +
      recipeList[i].Title +
      '</h1><p>' +
      recipeList[i].Description +
      '</p></div></div>';
  }
}

function setRecipe(clickedRecipe) {
  let url = new URL('http://localhost:5500/recipeDetail.html');
  url.searchParams.append('id', clickedRecipe._id);
  console.log('Efter', url);

  document.location.href = url;
}
