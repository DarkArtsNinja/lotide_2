

const tail = function(arr){
  if (arr.length === 0) {
    return false;
  } else {
    return arr.slice(1).toString();
  }
}
module.exports = tail;

