const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(ob1, ob2) {
  let stringob1 = "";  
  let checkObject = {};
  let stringCheckObject;

  //check based on length
  let lenObj1 = Object.keys(ob1).length;
  let lenObj2 = Object.keys(ob2).length;

  if (lenObj1 != lenObj2) {
    return false
  } else {
    stringob1 = Object.entries(ob1).toString();
    for (const key1 in ob1) {
      for (const key2 in ob2) {
        if (key1 === key2 && ob1[key1] === ob2[key2]) {
          checkObject[key2] = ob2[key2] ;
          continue;
        } else {
          continue;
        }
      }
    }
    stringCheckObject = Object.entries(checkObject).toString()
    if (stringCheckObject == stringob1) {
      return true;
    } else {
      return false;
    };
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

