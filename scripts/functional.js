// currying 
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
// multiplyBy5(10) |# 50.

//Compose 
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5); // 7 |# sum(sum(5)).

// functional approach to solving OOP class objects
function selector(country, school) {
  return function(student) {
    return student.address.country() === country &&
      student.school() === school;
  };
}

var findStudentsBy = function(friends, selector) {
  return friends.filter(selector);
};

fundStudentsBy([curry, turing, church, kleene],
               selector("US", "Princeton")); // |# [church, kleene]
// implementation for zipCode.
function zipCode(code, location) {
  let _code = code;
  let _location = location || "";

  return {
    code: function() {
      return _code;
    },
    location: function() {
      return _location;
    },
    fromString: function(str) {
      let parts = str.split("-");
      return zipCode(parts[0], parts[1]);
    },
    toString: function() {
      return _code + "-" + _location;
    }
  };
}

