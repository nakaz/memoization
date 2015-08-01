var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var memoize = require('../script.js');

describe('Memoize', function(){

  it('should be a function', function (){
    expect(memoize).to.be.a('function');
  });

});