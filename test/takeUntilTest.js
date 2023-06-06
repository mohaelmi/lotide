const takeUntil = require('../takeUntil')
const assert = require('chai').assert

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    let output = takeUntil(data, (v) => v < 0)
    const expected = [1, 2, 5, 7, 2]
    assert.deepEqual(output, expected)
  })
  it("returns string before comma for  ['I have', 'been', 'to', 'Hollywood', ',', 'last', 'month']", () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    let output = takeUntil(data, x => x === ',');
    const expected = [ "I've", 'been', 'to', 'Hollywood']
    assert.deepEqual(output, expected)
  })


})

