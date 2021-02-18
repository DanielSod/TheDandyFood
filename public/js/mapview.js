let recipeList = [];

let coordinateArray = [
  { lat: 57.7087, long: 11.9751 },
  { lat: 48.864716, long: 2.349014 },
  { lat: 13.923404, long: 30.84822 },
  { lat: -10.833306, long: -57.79459 },
  { lat: 21.943046, long: 46.337393 },
  { lat: 40.178873, long: -2.562423 },
  { lat: 34.016242, long: 112.475274 },
  { lat: 61.438767, long: 100.474262 },
  { lat: 64.472794, long: 27.652233 },
  { lat: 36.03133, long: -80.349519 },
  { lat: 39.639538, long: -119.75081 },
];

var map;

async function getRecipes() {
  let container = document.querySelector('.recipe-card-container');
  container.innerHTML = '';
  let searchTerm = document.querySelector('#recipe-search').value;

  const response = await fetch(`/recipes/${searchTerm}`);
  const data = await response.json();

  recipeList = data;

  for (let i = 0; i < recipeList.length; i++) {
    container.innerHTML +=
      '<div class="recipe-card"><div class="description-container"><h2>' +
      recipeList[i].Title +
      '</h2><p>' +
      recipeList[i].Description +
      '</p></div></div>';
  }

  for (let i = 0; i < container.children.length; i++) {
    container.children[i].onclick = function () {
      setRecipe(i);
    };
  }
  getMap();
}

function setRecipe(i) {
  id = recipeList[i]._id;
  let url = new URL('http://localhost:5500/recipeDetail.html');
  url.searchParams.append('id', id);

  console.log(id);
  document.location.href = url;
}

function getMap() {
  if (map) {
    map.off();
    map.remove();
  }

  map = L.map('map').setView([0, 0], 2);

  for (let i = 0; i < recipeList.length; i++) {
    let coordinateObject = coordinateArray[Math.floor(Math.random() * coordinateArray.length)];
    var marker = L.marker([coordinateObject.lat, coordinateObject.long]).addTo(map);
    var popup = marker.bindPopup(recipeList[i].Title);
  }

  popup.openPopup();

  map.setMaxBounds([
    [84.67351256610522, -174.0234375],
    [-58.995311187950925, 223.2421875],
  ]);

  L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
      ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    minZoom: 2,
    maxZoom: 20,
  }).addTo(map);
}
