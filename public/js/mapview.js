async function getMapData() {
  console.log('Trying to get data');

  const response = await fetch('/api');
  const data = await response.json();
  console.log(data);

  let container = document.querySelector('.recipe-card-container');

  for (let i = 0; i < data.length; i++) {
    container.innerHTML +=
      '<div class="recipe-card"><div>Bild</div><div class="description-container"><h1>' +
      data[i].Realname +
      '</h1><p>' +
      data[i].Username +
      '</p></div></div>';
  }
}

{
  /* <div class='recipe-card'>
  <div>Bild</div>
  <div class='description-container'>
    <h1>Titel</h1>
    <p>Text</p>
  </div>
</div>; */
}

getMapData();
