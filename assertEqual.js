
const assertEqual = function(actual, expected) {
  if((actual === expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else if((actual !== expected)) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
  if((actual != expected)) {
    console.log( `Assertion Fialed: ${actual} != ${expected}`)
  }

}


assertEqual('Lighthouse Labs', 'bootcamp')
assertEqual(1, '1')