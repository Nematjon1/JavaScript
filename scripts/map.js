;"use strict";
/* 
 * How does map method work on arrays.
 * 1. Creates a new array
 * 2. Iterates through an array
 * 3. Runs a callback function for each value in thearray
 * 4. Pushes result of the callback function to the new array
 * 5. Returns the new array.
 */

function map(arr, callback) {
  let newArr = [];
  let i = 0;
  let length = arr.length;
  for(i; i < length; i++) {
    newArr.push(callback(arr[i], i, arr));
  };

  return newArr;
}

let array = [1, 2, 3];
let newArr = array.map(function(value, index, arr) {
  return value * 2;
});
console.log("Log from newArr:", newArr);
console.log("Log from array:", array);

function tripleValue(arr) {
  return arr.map(function(val) {
    return val * 3;
  });
}

let triple = [2, 3, 4];
console.log("Log from triple array", triple);
console.log("Log from tripleValue function on triple array:", tripleValue(triple));

