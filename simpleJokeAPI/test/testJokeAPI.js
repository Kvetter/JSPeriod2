var expect = require("chai").expect;
var jokes = require("../model/jokeREST");
var nock = require("nock");
var testJoke = { "id": 1234, "joke": "ha ha ha", "reference": "unknown" };
var n = nock('http://jokes-plaul.rhcloud.com');

describe("Get person api", function () {
  before(function (done) {
    n.get('/api/joke')
      .reply(200, testJoke);
    done();
  });

  it("should get a random joke", function (done) {
    jokes.getJoke(function (err, joke) {
      if (err) {
        throw err;
      }
      expect(joke.reference).to.be.equal("unknown");
      expect(joke).to.be.eql(testJoke);
      //You should also check whether the joke actually was added to the Data-store

      done();
    });
  });
});

