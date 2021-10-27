//this is built for comparing functions as they can't be easily compared in JS
function assertArrayEqual(actual, expected){
  let value;
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] === expected[i] && (i < actual.length - 1)) {
      continue;
    }
    else if (actual[i] === expected[i] && (i === actual.length - 1)) {
      value = true;
    }
    else {
      value = false
    }
  }
  if (value === true) {
    return (`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`Assertion Failed: ${actual} !== ${expected}`);
  }
}

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArrayEqual([1, 2, 3], [3, 2, 1])) // => false

console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", 3])) // => false

module.exports = assertArrayEqual;
// assertEqual(([1, 2, 3], [1, 2, 3]), true); // => should PASS
