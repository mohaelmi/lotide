
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else if ((actual !== expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



const findKeyByValue = (object, value) => {
  for(let key in object){
    if(object[key] === value){
      return key
    }
  }

  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => pass