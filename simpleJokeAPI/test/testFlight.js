var expect = require("chai").expect;
var jokes = require("../model/jokeREST");
var nock = require("nock");
var flight = require("../model/flightModule");
var n = nock("http://angularairline-plaul.rhcloud.com");
var flightData = { "test": "halloHallo" };

describe("Get Flight api", function () {
  before(function(done) {
     n.get('/api/flightinfo/SXF/2016-03-09T00:00:00.000Z/4')
      .reply(200, flightData);
    done();
  })

  it("should get a random flight", function (done) {
    var date = new Date("2016-03-09");
    flight("SXF", date, 4,  function (err, flight) {
      if (err) {
        throw err;
      }
      expect(flight.test).to.be.equal("halloHallo");
      expect(flight).to.be.eql(flightData);
      //You should also check whether the joke actually was added to the Data-store

      done();
    });
  });


});