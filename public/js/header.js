getHeader();

function getHeader(){
    fetch("./header.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector(".nav-container").innerHTML = data;
    });
}

