const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else if ((actual !== expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if ((actual != expected)) {
    console.log(`🛑🛑🛑 Assertion Fialed: ${actual} != ${expected}`);
  }

};

const tail = function(array) {
  return array.slice(1);
};

const arr = [1,2,3];
let result = tail(arr);
console.log(result);
assertEqual(result[0],  2);
assertEqual(result[1],  3);