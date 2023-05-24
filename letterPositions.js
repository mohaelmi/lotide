const assertArraysEqual =  function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  else {
    for (let i in array1) {
      if (array1[i] !== array2[i]) return false;
    }
  }
  return true;
};


const letterPositions = (string) => {
  const positionObject = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ')
      if (!positionObject[string[i]]) {
        positionObject[string[i]] = [i];
      } else {
        positionObject[string[i]].push(i);
        positionObject[string[i]] = positionObject[string[i]];
      }
  }
  
  return positionObject;
};


const letterPositionObj = letterPositions("hello");
assertArraysEqual(letterPositions("hello").h, [0]); // => pass
assertArraysEqual(letterPositionObj['e'], [1]); // => pass
assertArraysEqual(letterPositionObj['l'], [2, 3]); // => pass
assertArraysEqual(letterPositionObj['o'], [4]); // => pass


console.log(letterPositions("lighthouse in the house"));



