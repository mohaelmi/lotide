const assert = require('chai').assert
const findKeyByValue = require('../findKeyByValue')

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("returns drama(key) when search by its value 'the Wire' ", () => {
    let output = findKeyByValue(bestTVShowsByGenre, "The Wire")
    const expected = "drama"
    assert.strictEqual(output, expected)
  })

  it("returns undefined when searching non-exist key by its value", () => {
    let output = findKeyByValue(bestTVShowsByGenre, "That '70s Show")  
    const expected = undefined
    assert.strictEqual(output, expected)
  })
})

