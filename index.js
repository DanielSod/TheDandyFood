//let server = require('../Server/Server.js')
const { response } = require('express');
const express = require('express');
const { request } = require('http');
const Datastore = require('nedb');
const app = express();

app.listen(5500, () => console.log('listening at 5500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const usersDB = new Datastore('users.db');
const recipesDB = new Datastore('recipes.db');

recipesDB.loadDatabase();
console.log('RecipesDB is running');
usersDB.loadDatabase();
console.log('UserDB is running');

app.post('/recipes', (request, response) => {
  const data = request.body;
  console.log(data);
  recipesDB.insert(data);
  response.json({
    status: 'success',
  });
});

app.get('/recipes', (request, response) => {
  recipesDB.find({}, function (err, data) {
    console.log('Alla recept');
    if (err) {
      console.log(err);
    }
  });
});

app.get('/recipes/:title', (request, response) => {
  let title = request.params.title;

  recipesDB.find({ Title: new RegExp(title) }, function (err, data) {
    if (err) {
      console.log(err);
    }
    response.json(data);
  });
});

app.get('/detail/:id', (request, response) => {
  let id = request.params.id;
  recipesDB.findOne({ _id: id }, function (err, data) {
    if (err) {
      console.log(err);
    }
    response.json(data);
  });
});

app.post('/users', (request, response) => {
  const data = request.body;
  usersDB.insert(data);

  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon,
  });
});

app.get('/users', (request, response) => {
  usersDB.find({}, function (err, data) {
    if (err) {
      console.log(err);
    }
    response.json(data);
  });
});

app.get('/users/:id', (request, response) => {
  let userName = request.params.id;
  usersDB.find({ Username: userName }, function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
    response.json(data);
  });
});
