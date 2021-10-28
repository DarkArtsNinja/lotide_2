const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(words){
  let result = {}; //store the values in here

  for (const letter of words) {

    //how to get the index of an element in string of words
    // console.log(words.indexOf(letter));
    // console.log(letter);

    if (result[letter]) {
      //how to add an array to a value of an object
      result[letter] += [letter];
    } else {
      console.log(result[letter] = letter) ;
    }
  }
  return result;
  
}

console.log(countLetters("lighthouse in the house"));