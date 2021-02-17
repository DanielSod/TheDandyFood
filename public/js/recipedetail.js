setRecipeData();

async function setRecipeData() {
  let params = new URLSearchParams(document.location.search.substring(1));
  let id = params.get('id');

  const response = await fetch(`/detail/${id}`);
  const data = await response.json();
  console.log(id);
  let recipe = data;

  document.querySelector('#recipeTitle').textContent = recipe.Title;
  document.querySelector('#recipeDescription').textContent = recipe.Description;

  let ingredientList = document.querySelector('.ingredient-list');
  let howtoList = document.querySelector('.howto-list');

  if (recipe.Ingredients) {
    recipe.Ingredients.forEach((ingredient) => {
      console.log(ingredient);
      ingredientList.innerHTML += '<li>' + ingredient + '</li>';
    });
  }
  if (recipe.Howto) {
    recipe.Howto.forEach((howto) => {
      console.log(howto);
      howtoList.innerHTML += '<li>' + howto + '</li>';
    });
  }
}