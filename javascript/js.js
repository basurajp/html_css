// Immutable Object:
// 
let obj ={
    fname :'basuraj',
    lname :'poojari',
    age :'23'

}

Object.freeze(obj)

delete obj.age

console.log(obj)