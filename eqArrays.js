//this does a simple comparison
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const tail = function(arr){
//   if (arr.length === 0) {
//     return false;
//   } else {
//     return arr.slice(1).toString();
//   }
// }

function eqArrays(arr1, arr2){
  for (let i = 0; i < arr1.length ; i++) {
    if (arr1[i] === arr2[i] && (i < arr1.length - 1)) {
      continue;
    }
    else if (arr1[i] === arr2[i] && (i === arr1.length - 1)) {
      return true;
    }
    else {
      return false
    }
  }
}

module.exports = eqArrays;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ("Lighthouse", "Labs"));

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
