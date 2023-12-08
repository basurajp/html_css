// Array Splice and Slice:
// Given an array, use splice to remove the second element and then use slice to create a new array without modifying the original.

let Orginalarr = [1, 3, 5, 6, 7, 8];

Orginalarr.splice(1, 1);
let newArr = Orginalarr.slice();

console.log('Original array:', Orginalarr);
console.log('New array:', newArr);



