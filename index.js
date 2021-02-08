//let server = require('../Server/Server.js')
const { response } = require('express');
const express = require('express');
const { request } = require('http');
const Datastore = require('nedb');
const app = express();
app.listen(5500, () => console.log('listening at 5500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('dandyfood.db');
database.loadDatabase();
console.log('Server is running');

app.post('/api', (request, response) => {
  const data = request.body;
  database.insert(data);

  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon,
  });
});

app.get('/api', (request, response) => {
  database.find({}, function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(output);
  });
});

app.get('/api/:id', (request, response) => {
  let id = request.params.id;

  database.findOne({ Username: id }, function (err, data) {
    if (err) {
      console.log(err);
    }
    response.json(data);
  });
});

app.get('/users/:id', (request, response) => {
  let userName = request.params.id;
  database.find({ Username: userName }, function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
    response.json(data);
  });
});
