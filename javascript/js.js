// Currying:
// Write a function that takes three parameters and returns the result of their sum using currying..

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

