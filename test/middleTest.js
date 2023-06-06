const middle = require('../middle')
const assert = require('chai').assert

describe("#middle", () => {
  it("returns [5, 3] for [4, 5, 3, 4]", () => {
    let output = middle([4, 5, 3, 4])
    const expected = [5, 3]
    assert.deepEqual(output, expected)
  })
  it("returns 5 for [4, 5, 3]", () => {
    let output = middle([4, 5, 3])
    const expected = 5
    assert.deepEqual(output, expected)
  })
  it("returns empty array for []", () => {
    let output = middle([])
    const expected = []
    assert.deepEqual(output, expected)
  })

})

