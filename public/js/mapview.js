let recipeList = [];

async function getRecipes() {
  let container = document.querySelector('.recipe-card-container');
  container.innerHTML = '';
  let searchTerm = document.querySelector('#recipe-search').value;

  const response = await fetch(`/recipes/${searchTerm}`);

  const data = await response.json();
  console.log(data);

  recipeList = data;

  for (let i = 0; i < recipeList.length; i++) {
    container.innerHTML +=
      '<div class="recipe-card"><div>Bild</div><div class="description-container"><h1>' +
      recipeList[i].Title +
      '</h1><p>' +
      recipeList[i].Description +
      '</p></div></div>';
  }

  for (let i = 0; i < container.children.length; i++) {
    container.children[i].onclick = function () {
      console.log(i);
      setRecipe(i);
    };
  }
}

function setRecipe(i) {
  id = recipeList[i]._id;
  let url = new URL('http://localhost:5500/recipeDetail.html');
  url.searchParams.append('id', id);

  console.log(id);
  document.location.href = url;
}
