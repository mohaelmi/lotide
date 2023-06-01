const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')


const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
       
  }

  return true;
};




const shirtObject = { color: ["red", "blue"], size: "medium" };
const anotherShirtObject = { size: "medium", color: ["red", "blue"] };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

// test cases
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => pass
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => pass










