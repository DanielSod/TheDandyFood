setRecipeData();

async function setRecipeData() {

  let params = new URLSearchParams(document.location.search.substring(1));
  let id = params.get("id");

  const response = await fetch(`/recipes/${id}`);
  const recipe = await response.json();

  console.log(data);
  
  document.querySelector('#recipeTitle').textContent = recipe.Title;
  document.querySelector('#recipeDescription').textContent = recipe.Description;
}
