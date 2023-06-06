const flatten = require('../flatten')
const assertArraysEqual = require('../assertArraysEqual')


let unflattedArray = [1, 2, [3, 4], 5, [6]]
newResult = flatten(unflattedArray) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(newResult, [1, 2, 3, 4, 5, 6]) // => pass
assertArraysEqual(newResult, [1, 2, 3, [4], 5, 6]) // => fail