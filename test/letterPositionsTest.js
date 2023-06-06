const letterPositions = require('../letterPositions')
const assert = require('chai').assert

describe("#letterPositions", () => {
  it("returns [0] for letterPositions('hello').h", () => {
    const letterPositionObj = letterPositions("hello");
    const output = letterPositionObj['h']
    const expected = [0]
    assert.deepEqual(output, expected)
  })
  it("returns [2, 3] for letter 'l' when pass hello", () => {
    const letterPositionObj = letterPositions("hello");
    const output = letterPositionObj['l']
    const expected = [2, 3]
    assert.deepEqual(output, expected)
  })

})
