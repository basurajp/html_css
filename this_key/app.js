// Problem 2: Define a Bird() function and use Prototype Inheritance to inherit from Animal(). Then add a new method, fly.

function Animal() {}

Animal.prototype.move = function () {
  return "animla can move ";
};
Animal.prototype.eat = function () {
  return "animal can eat ";
};

function Bird() {}

Bird.prototype = new Animal();

Bird.prototype.fly = function () {
  return "bird can fly";
};

var bird = new Bird();
console.log(bird.eat());
