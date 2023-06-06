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

console.log(letterPositions)

module.exports = letterPositions
