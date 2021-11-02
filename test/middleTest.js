// const middle = require("../middle");
// const assertArrayEqual = require("../assertArraysEqual");

// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]) );
// console.log(middle([1, 2, 3, 4, 5, 6]));

const middle = require('chai').assert;
const assertArrayEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

it("returns '3' for ['3']", () => {
  assert.deepEqual(([1, 2, 3, 4, 5, 6]), [3]); 
});
