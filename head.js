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

const head = function(array){
  return array[0]
}

assertEqual(head([2, 3, 4]), 2)