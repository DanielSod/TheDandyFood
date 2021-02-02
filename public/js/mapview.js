async function getMapData() {
  console.log('Trying to get data');

  const response = await fetch('/api');
  const data = await response.json();
  console.log(data);

  let html = data
    .map(function (element) {
      return '<div class="recipe-card">' + element.Username + '<div/>';
    })
    .join('');

  document.querySelector('.recipe-card-container').innerHTML = html;
}

getMapData();
