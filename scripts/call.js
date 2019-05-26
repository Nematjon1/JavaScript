let person ={
  firstName: "Tim",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "HElello" + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
};

person.sayHello.call(person);
person.determineContext.call(person);

