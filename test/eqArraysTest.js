const assert = require('chai').assert
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
  it("returns true for same two array like [2, 3, 4] and [2, 3, 4]", () => {
    const arr1 = [2, 3, 4]
    const arr2 = [2, 3, 4]
    const acual = eqArrays(arr1, arr2)
    const expected = true
    assert.strictEqual(acual, expected)
  })

  it("returns falsy for different two array like [2, 3, 'y'] and [2, 6, 4]", () => {
    const arr1 = [2, 3, 'y']
    const arr2 = [2, 6, 4]
    const acual = eqArrays(arr1, arr2)
    const expected = false
    assert.strictEqual(acual, expected)
  })

})
