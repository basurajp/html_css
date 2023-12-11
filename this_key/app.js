// (Easy) Write a JavaScript function called Rectangle that takes two parameters: height and width. Use the this keyword to assign these parameters to the object's properties. Also, create a method called calculateArea() which calculates and returns the area of the rectangle.

function rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calculateArea = function () {
    return this.height * this.width;
  };
}

var area = new rectangle(5, 4);

console.log(area.calculateArea());
