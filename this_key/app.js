// Create a nested object 'nestedObj' where an inner object 'innerObj' has a method 'print'. Inside 'print', log 'this' keyword and interpret the output.
var nestedObj = {
  innerObj: {
    print: function() { console.log(this); }
  }
}
nestedObj.innerObj.print();