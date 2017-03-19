const should = require('chai').should();

const fizzbuzz = require('../fizzBuzzer');


// unit tests for our `fizzbuzz` function
describe('fizzbuzz', function() {

  // test the normal case
  it('return fizz buzz or fizzbuzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 45, expected: 'fizz-buzz'},
      {num: 9, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 7, expected: 7},
      {num: -4, expected: -4}
    ];
   // test normal cases for fizz or buzz or fizzbuzz
    normalCases.forEach(function(input) {
      const answer = fizzbuzz(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      [NaN],
      [undefined],
      ['whatever']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzbuzz(input)
      }).should.throw(Error);
    });
  });
});