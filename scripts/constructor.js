;"use strict";

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOff = function() {
  return this.isRunning = false;
};
Vehicle.prototype.turnOn = function() {
  return this.isRunning = true;
};
Vehicle.prototype.honk = function() {
  if(this.isRunning) {
    return "Beep!"
  };
};

let moto = new Vehicle("toyota", "rzxs", 2010);
moto.turnOn();
moto.honk();
console.log("MOto's make:", moto.make);
console.log(moto.honk());

