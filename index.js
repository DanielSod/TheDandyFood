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
  console.log(request.body);
  const data = request.body;
  database.insert(data);

  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon,
  });
});

app.get('/api', (request, response) => {
  database.find({}, function (err, output) {
    if (err) {
      console.log(err);
    }
    console.log(output);
  });
});
