/*   --Some Function--
 *  1. Iterates through an array
 *  2. Runs a callback on each value in the array.
 *  3. If the callback returns true for at least one single value, return true.
 *  4.OtherWise, return false.
 */
funstion some(arr, callback) {
  let i = 0,
  length = arr.length;
  for(i; i < length; i++) {
    if(callback(arr[i], i, arr)) {
      return true;
    };
  };
  return false;
}

function hasEvenNumber(arr) {
  return arr.some(function(val) {
    return val % 2 === 0;
  });
}

function hasComma(str) {
  return str.split("").some(function(val) {
    return val === ",";
  });
}

