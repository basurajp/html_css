// Problem 1:  You are trying to create a simple object in JavaScript and use the this keyword. Write a JavaScript program to create an object student with properties name and age using this keyword. Create a method display() in the student object, which will display the student's name and age.

let student = {
  name : 'Basuraj',
  age: 20 ,
 display: function(){
  console.log(`Name : ${this.name} , Age : ${this.age}`)
 }

}

student.display()
