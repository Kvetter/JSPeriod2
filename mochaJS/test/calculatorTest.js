var calc = require("../js/calculator");
let expect = require("chai").expect;


describe('Array', function () {
  before(function () {
    // ...
  });

  describe('#add', function () {
    it('should add a and b', function () {
      expect(calc.add(2,3)).to.be.equal(5);
    });
  });

  describe('#sub', function () {
    it('should substract a and b', function () {
      expect(calc.sub(3,2)).to.be.equal(1);
    });
  });

  describe('#mult', function () {
    it('should multiply a and b', function () {
      expect(calc.mult(3,2)).to.be.equal(6);
    });
  });

  describe('#divide', function () {
    it('should divide a and b', function () {
      expect(calc.divide(4,2)).to.be.equal(2);
    });
  });


});
