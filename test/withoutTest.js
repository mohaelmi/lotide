const without = require('../without')
const assert = require('chai').assert


describe("#without", () => {
  it("returns [2, 3] for passing this [1, 2, 3] and number to remove [1]", () => {
    let num = [1, 2, 3]
    const output = without(num, [1])
    const expected = [2, 3]
    assert.deepEqual(output, expected)
  })
  it("returns ['1', '2'] for passing (['1', '2', '3'], [1, 2, '3'])", () => {
    let num = ['1', '2', '3']
    const output = without(num, [1, 2, '3'])
    const expected = ['1', '2']
    assert.deepEqual(output, expected)
  })

  it("returns array for passing only array", () => {
    let num = [1, 2, 3]
    const output = without(num)
    const expected = num
    assert.deepEqual(output, expected)
  })
 
})
