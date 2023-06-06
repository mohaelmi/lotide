const findKey = require('../findKey')
const assertEqual = require('../assertEqual')

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const result = findKey(data, (key) => {
  return data[key].stars === 2
})

const result1 = findKey(data, (key) => {
  return data[key].stars === 8
})


//test cases
assertEqual(result, 'noma') // => Pass
assertEqual(result1, undefined) // => Pass
assertEqual(result, 'Ora') // => Fail