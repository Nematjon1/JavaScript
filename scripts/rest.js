class Person {
  constructor(name) {
    this.name = name;
  } 

  hello() {
    return `Hello, I am ${this.name}`;
  }
}

class Programmer extends Person {
  hello() {
    return `${super.hello()}. I am a programmer.`;
  }
}

const Sam = new Programmer("Sam");
console.log(Sam.hello());

const items = `
Hey
this

string
is awesome!`.trim();

const { first, second, ...others} = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
};

