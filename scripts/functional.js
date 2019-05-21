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
// const princetonZip = zipCode("08544", "3345");
// proncetonZip.toString(); |# "08544-3345"
var person = Object.freeze(new Person("Haskell", "Curry", "444-44-4444"));
person.firstname = "Bob"; // Not allowed
var isObject = val => val && typeOf val === "object";
function deepFreeze(obj) {
  if(isObject(obj) &&
      !Object.isFrozen(obj)) {
    Object.keys(obj).forEach(name => deepFreeze(obj[name]));
    Object.freeze(obj);
  }
  return obj;
}
// Ramda.js library
var person = new Person("Alonzo", "Church", "444-44-4444");
var lastnameLens = R.lenseProp("lastname");
R.view(lastnameLens, person); // |# "Church"
var newPerson = R.set(lastnameLens, "Mourning", person);
newPerson.lastname;// |# "Mourning"
person.lastname; // |# "Church"
var zipPath = ["address", "zip"];
var zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath));
R.view(zipLens, person); // |# zipCode("08544", "1234")
var newPerson = R.set(zipLens, person, zipCode("90210", "5678"));
R.view(zipLens, newPerson); // |# zipCode("90210", "5678")
R.view(zipLens, person);// |# zipCode("08544", "1234")

//============= higher-order functions
function applyOperator(a, b, opt) {
  return opt(a, b);
}
var multiplier = (a, b) => a * b;
applyOperation(2, 3, multiplier); // |# 6

function add(a) {
  return function(b) {
    return a + b;
  }
}
add(3)(3); // |# 6

