// const letterPositions = function(sentence) {
//   const results = {};
//   // logic to update results here, must show the indices of where the letters occur
//   for (const i of sentence) {
//     if (results[i]) {
//       results[i] += sentence.indexOf(i);
//     } else {
//       results[i] += sentence.indexOf(i);
//     }
//   }

//   return results;
// };

function letterPositions(words){
  let result = {}; //store the values in here

  for (const letterIndex in words) {

    let letter = words[letterIndex];

    //how to get the index of an element in string of words
    // console.log(words.indexOf(letter));
    // console.log(letter);

    if (result[letter]) {
      //how to add an array to a value of an object
      result[letter].push(letterIndex);
    } else {
     result[letter] = [letterIndex] ;
    }
  }
  return result;
  
}

console.log(letterPositions("hello"));
