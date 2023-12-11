// Problem 4: (Medium) Write a JavaScript program that takes two arguments for a Book constructor: title and author. Use the this keyword to assign these parameters. Create a method called detail() which returns a string that includes both the book title and its author.


function Book (title,author){
  this.title = title ;
  this.author = author ;
  this.detail = function(){
    return `Title is : ${this.title} and Author is : ${this.author}`
  }

}

let book1  = new Book('Rich dad poor dad ', 'Robert')

console.log(book1.detail());
