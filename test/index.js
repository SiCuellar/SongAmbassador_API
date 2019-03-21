var app = require('../server')
  request = require('supertest')
const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// const server = require('../server');



describe('favorites', () => {
  it('can find all favorited songs', function() {
    return request(app)
      .get('/api/v1/favorites')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.ok(res.body[0].title)
      })
  });
  it('can find one favorited song by id', function() {
    return request(app)
      .get('/api/v1/favorites/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.ok(res.body[0].title),
        chai.assert(res.body.length, 1)
      })
  });
});
