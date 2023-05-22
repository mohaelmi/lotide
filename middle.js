// TEST ASSERTION FUNCTION
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


// ACTUAL FUNCTIONS

const middle = function(array) {
  if (array.length < 3) return [];
  if (array.length % 2 === 0) {
    return array.slice((array.length / 2) - 1, (array.length / 2) + 1);
  } else {
    return array[Math.floor(array.length / 2)];

  }

};

const evenArray = [4, 5, 3, 4];
const oddArray = [4, 5, 3];
const empty =  [];

assertArraysEqual(middle(evenArray), [5, 3]); // => pass
assertArraysEqual(middle(oddArray), 5); // => pass
assertArraysEqual(middle(empty), []); // => pass
assertArraysEqual(middle(evenArray), [5]); // => fail
// console.log(middle(array)) // => []
