const flatten = require('../flatten')
const assert = require('chai').assert


describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => { 
    let output = flatten([1, 2, [3, 4], 5, [6]])
    const expected = [1, 2, 3, 4, 5, 6]
    assert.deepEqual(output, expected)
  })

  it("returns [1, 2] for [1, 2]", () => { 
    let output = flatten([1, 2])
    const expected = [1, 2  ]
    assert.deepEqual(output, expected)
  })
})
