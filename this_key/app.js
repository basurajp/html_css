// Problem 1: Create a function Animal() using the prototype property and add two methods to it, move and eat.

function Animal() {}

Animal.prototype.move = function () {
  return "the animal is moved ";
};

Animal.prototype.eat = function () {
  return "animal can eat ";
};

let ani1  = new Animal()
console.log(ani1.move())
