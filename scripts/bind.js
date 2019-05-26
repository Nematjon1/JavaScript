;"use strict";

function arrayFrom(arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
}

function sumEvenArguments() {
  let newArgs = [].slice.call(arguments);
  return newArgs.reduce(function(acc, next) {
    if(next % 2 === 0) {
      return acc + next;
    }
    return acc;
  }, 0);
}

function invokeMax(fn, num) {
  let max = 0;
  return function() {
    if(max >= num) {
      return "Maxed Out!";
    }
    max++;
    return fn.apply(this, arguments);
  };
}

