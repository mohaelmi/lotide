const takeUntil = require('../takeUntil')
const assertArraysEqual = require('../assertArraysEqual')


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const sliceArr = takeUntil(data1, (v) => v < 0)
assertArraysEqual(sliceArr, [1,2,5,7,2]) // => Pass

const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]); // => Pass
