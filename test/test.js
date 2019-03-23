var app = require('../server')
const test = require('supertest')
const chai = require('chai');
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
  it('can post to add a favorite', () => {
    return test(app)
      .post('/api/v1/favorites/queen/rock/90')
      .expect(200)
      .expect('{"success":"favorite added!"}')
  })
});
