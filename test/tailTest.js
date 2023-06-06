const assert = require('chai').assert
const tail = require('../tail')


describe("#tail", () => {
  it("returns [3, 4] for [2, 3, 4]", () => {
    const array = [2, 3, 4]
    let output = tail(array)
    const expected = [3, 4]
    assert.deepEqual(output, expected)
  })

  it("returns [] for [5]", () => {
    const array = [5]
    let output = tail(array)   
    assert.deepEqual(output, [])
  })
})
