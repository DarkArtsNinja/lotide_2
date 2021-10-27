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

const middle = function(array) {
  const length = array.length;
  if (length % 2 === 0) {
    
  } else {
    
  }
}