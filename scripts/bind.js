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
function once(fn, thisArg) {
  let hasBeenCalled = false;
  return function() {
    if(!hasBeenCalled) {
      hasBeenCalled = true;
      return fn.apply(thisArg, arguments);
    };
  };
}

function bind() {
  let outerArgs = [].slice.call(arguments, 2);
  return function() {
    let innerArgs = [].slice.call(arguments);
    let allArgs = outerArgs.concat(innerArgs);
    return fn.apply(thisArg, allArgs);
  };
}

function flip(fn, thisArgs) {
  let outerArgs = [].slice.call(arguments, 2);
  return function() {
    let innerArgs = [].slice.call(arguments);
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
    return fn.apply(thisArgs, allArgs.reverse());
  };
}

