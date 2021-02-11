setRecipeData();

function setRecipeData() {

  let params = new URLSearchParams(document.location.search.substring(1));
  let id = params.get("id");
  console.log(id);

  let recipe = JSON.parse(localStorage.getItem('clickedRecipe'));
  console.log(recipe);

  document.querySelector('#recipeTitle').textContent = recipe.Title;
  document.querySelector('#recipeDescription').textContent = recipe.Description;
}
