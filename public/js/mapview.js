// getRecipeData();
// getUser();

let userArray = [];

async function getRecipeData() {
  console.log('Trying to get data');

  const response = await fetch('/api');
  userArray = await response.json();
  console.log(userArray);

  let container = document.querySelector('.recipe-card-container');

  for (let i = 0; i < userArray.length; i++) {
    container.innerHTML +=
      '<div class="recipe-card"><div>Bild</div><div class="description-container"><h1>' +
      userArray[i].Realname +
      '</h1><p>' +
      userArray[i].Username +
      '</p></div></div>';
  }
}

async function getUser(){

let searchTerm = document.querySelector("#recipe-search").value;
console.log(searchTerm);

 const response = await fetch(`/users/${searchTerm}`);

 const data = await response.json();

 userArray = data;
 let container = document.querySelector('.recipe-card-container');
 for (let i = 0; i < userArray.length; i++) {
  container.innerHTML +=
    '<div class="recipe-card"><div>Bild</div><div class="description-container"><h1>' +
    userArray[i].Realname +
    '</h1><p>' +
    userArray[i].Username +
    '</p></div></div>';
}

 console.log(userArray);
}

