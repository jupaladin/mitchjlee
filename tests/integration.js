var should = require('chai').should(),
    supertest = require('supertest'),
    api = supertest('http://localhost:8888');

describe('GET /', function() {
  it('responds with success', function(done){
    api.get('/')
      .expect(200, done)
  });
});
