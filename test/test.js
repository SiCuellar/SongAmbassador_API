var app = require('../server')
const test = require('supertest')
const chai = require('chai');
const knexCleaner = require('knex-cleaner')

const environment = "development";
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration)
database('favorites').where(database.raw("favorites.fav_id = ?", [1]))
  .then(song => {song1 = song})

// const should = chai.should();
// const chaiHttp = require('chai-http');
// const server = require('../server');



describe('favorites', () => {
  it('can find all favorited songs', function() {
    return test(app)
      .get('/api/v1/favorites')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.ok(res.body[0].title)
      })
  });
  it('can find one favorited song by id', function() {
    return test(app)
      .get('/api/v1/favorites/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.ok(res.body[0].title),
        chai.assert(res.body.length, 1)
      })
  });
  it('can update elements of a selected song', () => {
    return test(app)
      .put('/api/v1/favorites/1/?title=silvertron')
      .expect(200)
      .expect('{"success":"song successfully updated"}')
  });
  it('can post to add a favorite', () => {
    return test(app)
      .post('/api/v1/favorites/queen/rock/90')
      .expect(200)
      .expect('{"success":"favorite added!"}')
      .then(() => {
        knexCleaner.clean(database).then(() => {})
        database.seed.run()
      }
  )
  });
  it('can delete a favorite', () => {
    return test(app)
      .delete('/api/v1/favorites/1/')
      .expect(200)
      .expect('{"success":"song successfully deleted"}')
      .then(() => {
        knexCleaner.clean(database).then(() => {})
        database.seed.run()
      }
  )
  });
});
