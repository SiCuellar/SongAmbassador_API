const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || "development";
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration)
const test = require('supertest');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
app.locals.title = "favorites";

app.get("/api/v1/favorites", (request, response) => {
  database('favorites').select().table('favorites')
    .then(songs => response.status(200).json(songs))
    .catch(error => response.status(500).json({ error }))
});
// /api/v1/favorites test

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
});

module.exports = app;