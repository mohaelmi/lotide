const assertArraysEqual = require('../assertArraysEqual')
const without = require('../without')


//test cases
let num = [1, 2, 3]

assertArraysEqual(without(num, [1]), [2, 3]) // Pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
assertArraysEqual(without(num), num)