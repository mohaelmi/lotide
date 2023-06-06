const letterPositions = require('../letterPositions')
const assertArraysEqual = require('../assertArraysEqual')


const letterPositionObj = letterPositions("hello");
assertArraysEqual(letterPositions("hello").h, [0]); // => pass
assertArraysEqual(letterPositionObj['e'], [1]); // => pass
assertArraysEqual(letterPositionObj['l'], [2, 3]); // => pass
assertArraysEqual(letterPositionObj['o'], [4]); // => pass


console.log(letterPositions("lighthouse in the house"));
