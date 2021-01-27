//let server = require('../Server/Server.js')
const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(5500, () => console.log('listening at 5500'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('dandyfood.db');
database.loadDatabase();
database.insert({
    Username: 'DandyThree',
    Password: 'dthree',
    Realname: 'Dandy Try Three',
    Email: 'dthree@dandy.se',
    Country: 'Dandyland',
});


app.post('/api', (request, response) => {
    console.log('I Got A Request');
    console.log(request.body);
    const data = request.body;
    database.push(data);
    console.log(database);
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    });
});
