const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = (string) => {
  const positionObject = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ')
      if (!positionObject[string[i]]) {
        positionObject[string[i]] = [i];
      } else {
        positionObject[string[i]].push(i);
        positionObject[string[i]] = positionObject[string[i]];
      }
  }
  
  return positionObject;
};


const letterPositionObj = letterPositions("hello");
assertArraysEqual(letterPositions("hello").h, [0]); // => pass
assertArraysEqual(letterPositionObj['e'], [1]); // => pass
assertArraysEqual(letterPositionObj['l'], [2, 3]); // => pass
assertArraysEqual(letterPositionObj['o'], [4]); // => pass


console.log(letterPositions("lighthouse in the house"));



