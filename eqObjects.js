const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else if ((actual !== expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) return false;
  else {
    for(let i in array1){
      if(array1[i] !== array2[i]) return false
    }
  }
  return true
}

const eqObjects = (object1, object2) => {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false
  }
  for(let i in Object.keys(object1) ){
    console.log(Object.keys(object1)[i], Object.keys(object2)[i])
      if(!Object.keys(object1).includes(Object.keys(object2)[i])){
        return false
      }
  }

  return true
}




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => true

// eqObjects(shirtObject , longSleeveShirtObject); // => false