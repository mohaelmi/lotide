const assert = require('chai').assert
const findKey = require('../findKey')

describe("#findKey", () => {
  const data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
  it("returns 'noma' when search its value which is { starts 2 } ", () => {
    let output =  findKey(data, (key) => {
      return data[key].stars === 2
    })
    const expected = "noma"
    assert.strictEqual(output, expected)
  })

  it("returns undefined when searching not-exist value", () => {
    let output = findKey(data, (key) => {
      return data[key].stars === 8
    })
    const expected = undefined
    assert.strictEqual(output, expected)
  })
})

