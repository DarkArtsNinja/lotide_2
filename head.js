const assertEqual = require('./assertEqual');


const head = function(arr){
  if (arr.length === 0) {
    return false;
  } else {
    return arr[0];
  }
}

module.exports = head; 

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hsdfsdello");