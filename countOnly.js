const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
// let namesAlreadyCounted = []; 
let namesTally = {}; //this array will show the total number of names and value

let nameCounter = 0; //this counts the number of times the name appeared

// function nameCheck(name){
//   return name !== allItems[j];
// }
for (const names of allItems) {
  if (itemsToCount[names] === true) {
    if (namesTally[names]) { 
      namesTally[names]++; 
    } else {
      namesTally[names] = 1;
    }
  }
}
 return namesTally;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames /*alltimems*/ , { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false } /*items to count*/ );
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


//this will walk through the loop and compare names
  // for (let i = 0; i < allItems.length - 1; i++) {
  //   for (let j = 1; j < allItems.length; j++) {
  //     if (allItems[i] === allItems[j] && namesAlreadyCounted.every(nameCheck)  ) {
  //       nameCounter++; //adds number of times name is counted
        
  //     }
  //   }
  // }
// how to tally all names?
// 1 must go through the Array, if match then increase the count 
//  2 when finished it must then be added to an array of already counted names, to avoid double counting 
// 3 when it goes to the next Element, check if the name has already been counted, if not do step 1

//make a funciotn countOnly arguments array of names and object checking names
//create empty object
//loop through the names, increment if true
