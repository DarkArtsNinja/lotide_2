// const tail =  require('../tail');
// const assertEqual = require('../assertEqual');

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(/*tail*/(["Hello", "Lighthouse", "Labs"]), ("Lighthouse", "Labs"));

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
