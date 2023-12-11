//  In JavaScript, a constructor function can be used to initialize new objects. Write a JavaScript program using constructor function to define a Person object with properties name and age. Use the this keyword and create a method to allow the Person object to introduce itself.


function Person (name, age ){
  this.name  = name ;
  this.age  = age ;
  this.introduce  = function(){
    console.log(`My name is ${this.name} and age is ${this.age}`)
  }


}

let p1 = new Person('basuraj',23)

p1.introduce()
