setRecipeData();

function setRecipeData() {
  let recipe = JSON.parse(localStorage.getItem('clickedRecipe'));
  console.log(recipe);

  document.querySelector('#recipeTitle').textContent = recipe.Title;
  document.querySelector('#recipeDescription').textContent = recipe.Description;
}
