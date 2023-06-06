const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

const evenArray = [4, 5, 3, 4];
const oddArray = [4, 5, 3];
const empty =  [];

assertArraysEqual(middle(evenArray), [5, 3]); // => pass
assertArraysEqual(middle(oddArray), 5); // => pass
assertArraysEqual(middle(empty), []); // => pass
assertArraysEqual(middle(evenArray), [5]); // => fail
// console.log(middle(array)) // => []
