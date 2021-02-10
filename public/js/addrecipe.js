//let server = require('../Server/Server.js')


let recipeTemp = {
    Description: 'Bästa protein per krona',
	Difficulty: '1',
	Howto: 'Lägg det på bordet och hacka',
    Ingredients: 'mjöl',
    PortionSize: '1',
    Qty: '1',
	Rating: '1',
	Recpic: 'en bild',
    Signature: 'Daniel',
    Time: '12',
    Title: '1kg mjöl',
    Unit: 'kg',
    _id: 'lFYPp9qsvd3b1iff',
};

function fillfromWeb() {
    console.log('Data sent');

    
    const recipe = {
        Description: document.querySelector('#description').value,
        Difficulty: document.querySelector('#difficulty').value,	
        Howto: document.querySelector('#howto').value,
        Ingredients: document.querySelector('#ingredients').value,
        PortionSize: document.querySelector('#portionSize').value,
        Qty: document.querySelector('#qty').value,
        Rating: document.querySelector('#rating').value,
        Recpic: document.querySelector('#recpic').value,
        Signature: document.querySelector('#signature').value,
        Time: document.querySelector('#time').value,
        Title: document.querySelector('#title').value,
        Unit: document.querySelector('#unit').value,
        _id: 'lFYPp9qsvd3b1iff',
    };

    console.log(recipe);

    recipeTemp = recipe;

    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(recipe),
    };
    fetch('/api', options);
}


async function getfromDB() {
const response = await fetch(`/api/${recipeTemp.Title}`);
const data = await response.json();

console.log(data);
}


// async function loadstuff(){
//     console.log('Trying to get data');
//     const response = await fetch('/api');
    
//     const data = await response.json();
//     console.log(data);
// }    

// async function blabla() {
//         const response = await fetch(`/api/${recipeTemp.Title}`);
//         const data = await response.json();
//         console.log(data);
//     }