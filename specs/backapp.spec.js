//
// test for the server routing.
// written in mocha.
//
// Mocha is a test framework, supporting the
// familiar describe, beforeEach, it functions.
// For async tests, invoke done(err) when the async
// part is completed, where done is passed by the framework
// to the it() callback.
//
// Mocha does not come with it's own assertion language,
// use chai for that.  This offers asserts in the assert,
// expect and should style.
//
// To test web servers, use supertest.  This starts a server
// on some port and offers a fluent api to send requests
// and verify response.
// 
//
'use strict';
var server = require('../lib/backapp'),
    request = require('supertest'),
    expect = require('chai').expect;


describe('backapp', function() {
  it('should serve notes over json', function(done) {
    // server.start(9876);
    request(server.app)
      .get('/svc/notes')
      .expect(200)
      .end(function(err, res) {
        if (err) { return done(err); }
        expect(res.header['content-type']).to.equal('application/json');
        expect(res.body[0].id).to.match(/aap/);
        done();
      });
  });

});
