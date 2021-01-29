//let server = require('../Server/Server.js')
const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(5500, () => console.log('listening at 5500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('dandyfood.db');
database.loadDatabase();
console.log('Server is running');

database.find({}, function (err, output) {
  if (err) {
    console.log(err);
  }
  console.log(output);
  //console.log(output[0].Username);
});

// // database.insert({
// //   Username: 'AndyPandy',
// //   Password: 'pass',
// //   Realname: 'Andreas',
// //   Email: 'pandy.andy@dandy.se',
// //   Country: 'PandyLand',
// // });

app.post('/api', (request, response) => {
  console.log(request.body);
  //   const data = request.body;
  //   database.insert(data);
  //   console.log(database);
  //   response.json({
  //     status: 'success',
  //     latitude: data.lat,
  //     longitude: data.lon,
  //   });
});
