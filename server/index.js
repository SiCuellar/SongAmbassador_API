const util = require('util')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || "development";
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration)
const corsYeah = require('cors')

app.use(corsYeah())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
app.locals.title = "favorites";


// show all favorites in db
app.get("/api/v1/favorites", (request, response, next) => {
  database('favorites').select().table('favorites')
    .then(songs => response.status(200).json(songs))
    .catch(error => response.status(500).json({ error }))
});

// show one favorite from index by id
app.get("/api/v1/favorites/:id", (req, res, next) => {
  database('favorites').where('id', req.params.id)
    .then(song => res.status(200).json(song) )
});

app.post('/api/v1/favorites/:artist/:title/:rating/:fav_id', (req, res, next) => {
  database('favorites').insert(req.params)
    .then(() => res.status(200).json({success: 'favorite added!'}))
});

app.put('/api/v1/favorites/:fav_id/', (req, res, next) => {
  database('favorites').where(database.raw("favorites.fav_id = ?", [req.params.fav_id])).update(req.query)
    .then(stuff => {res.status(200).json({success: 'song successfully updated'})})
    .catch(() => { res.status(400).json({ 'error':'ya done messed up'})})
});

app.delete('/api/v1/favorites/:fav_id', (req, res, next) => {
  database('favorites').where(req.params).del()
    .then(stuff => { res.status(200).json({ success: 'song successfully deleted' }) })
    .catch(() => { res.status(400).json({ error: 'song still exists' }) })
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
});


module.exports = app;

