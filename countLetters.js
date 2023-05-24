const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else if ((actual !== expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = (string) => {
  const result = {}
  for(let character of string){
    if(character !== ' '){
      if(!result[character]){
      //object['l'] = 1
      result[character] = 1
      }else {
        result[character] += 1
      }  
    }
  }
  return result;
}


const countObject = countLetters("lighthouse in the house")

assertEqual(countObject['l'],  1 ) // => pass
assertEqual(countObject['h'],  4 ) // => pass
assertEqual(countObject['u'],  1 ) // => fail
console.log(countObject)