const assert = require('chai').assert
const head = require('../head')


describe("#head", () => {
  it("returns 2 for [2, 3, 4]", () => {
    const array = [2, 3, 4]
    assert.strictEqual(head(array), 2)
  })
  it("returns 5 for [5]", () => {
    const array = [5]
    assert.strictEqual(head(array), 5)
  })
})

