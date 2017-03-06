var expect = require("chai").expect;
var module = require("../js/makeItModular");
var path = require("path");

describe("Testing async behaviour", function () {
  var foo = false;
  module(__dirname, "js", function (done, err, list) {
    if (err) {
      return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
      console.log(file)
      foo = true;
      done();
    })
    it("should pass (with done called)", function () {
      expect(foo).to.equal(true);
    });
  });
});