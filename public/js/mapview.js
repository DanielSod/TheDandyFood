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
      '<div class="recipe-card"><div class="description-container"><h2>' +
      recipeList[i].Title +
      '</h2><p>' +
      recipeList[i].Description +
      '</p></div><div class="image-container">Bild</div></div>';
  }

  for (let i = 0; i < container.children.length; i++) {
    container.children[i].onclick = function () {
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

var map = L.map('map').setView([50.84673, 4.35247], 12);
var marker = L.marker([50.84673, 4.35247]).addTo(map);
var popup = marker.bindPopup('<b>Hello world!</b><br />I am a popup.');

popup.openPopup();

L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
        ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom: 18
}).addTo(map);
