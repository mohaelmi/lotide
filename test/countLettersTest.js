const assertEqual = require('../assertEqual')
const countLetters = require('../countLetters')



const countObject = countLetters("lighthouse in the house")

assertEqual(countObject['l'],  1 ) // => pass
assertEqual(countObject['h'],  4 ) // => pass
assertEqual(countObject['u'],  1 ) // => fail
console.log(countObject)