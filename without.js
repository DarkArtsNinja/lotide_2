function assertArraysEqual(actual, expected){
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

function without(given, remove){
  let newArray = [];
  for (let i = 0; i < given.length ; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (given[i] !== remove[j]) {
        newArray.push(given[i]);
      } else {
        continue;
      }
    }
  }
  return newArray;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
