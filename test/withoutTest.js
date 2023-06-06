const assertArraysEqual = require('../assertArraysEqual')
const without = require('../without')


//test cases
let num = [1, 2, 3]
console.log(without(num, [1])) // => [2, 3]
assertArraysEqual(num, [1, 2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]