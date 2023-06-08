const assert = require('chai').assert
const countOnly = require('../countOnly')

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Fang",
    "Salima",
    "Joe"
  ];
  
  let output  = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("returns 1 for Jason ", () => {
    const expected = 1
    assert.strictEqual(output["Jason"], expected)
  })
  it("returns undefined for Karima ", () => {
    const expected = undefined
    assert.strictEqual(output["Karima"], expected)
  })
  it("returns 2 for Fang ", () => {
    const expected = 2
    assert.strictEqual(output["Fang"], expected)
  })
  it("returns undefined for Agouhanna ", () => {
    const expected = undefined
    assert.strictEqual(output["Agouhanna"], expected)
  })

})

