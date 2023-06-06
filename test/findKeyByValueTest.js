const findKeyByValue = require('../findKeyByValue')
const assertEqual = require('../assertEqual')

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => pass