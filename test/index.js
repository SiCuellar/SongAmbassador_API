var app = require('../server')
  request = require('supertest')
const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// const server = require('../server');



describe('asdfasdf', () => {
  it('dasfsad', function() {
    return request(app)
      .get('/api/v1/favorites')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        chai.assert.ok(res.body[0].title)
      })
  });
});
