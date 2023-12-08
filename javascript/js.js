// Delete Object Property:
// Write a function that takes an object and a property name as parameters and returns a new object with the specified property removed.

function removeroperty(obj, prop_reomve) {
  let newObj = { ...obj };
  if (prop_reomve in newObj) {
    delete newObj[prop_reomve];
  } else {
    console.log("property is not able ");
  }

  return newObj;
}

let obj = {
  name: "basuraj",
  age: 24,
  gender: "male",
};

console.log(removeroperty(obj, "age"));
