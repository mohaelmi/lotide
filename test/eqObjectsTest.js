const assert = require('chai').assert
const eqObjects = require('../eqObjects')

describe("#eqObjects", () => {
  const shirtObject = { color: ["red", "blue"], size: "medium" };
  const anotherShirtObject = { size: "medium", color: ["red", "blue"] };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

  it("returns true if the keys inside the object have same values", () => {
    const output = eqObjects(shirtObject , anotherShirtObject)
    const expected = true
    assert.strictEqual(output, expected)
  })
  
  it("returns falsy if the keys inside the object have different values", () => {
    const output = eqObjects(shirtObject , { size: "medium", color: "yellow"})
    const expected = false
    assert.strictEqual(output, expected)
  })

  it("returns falsy if the objects have different lengths", () => {
    const output = eqObjects(shirtObject , longSleeveShirtObject)
    const expected = false
    assert.strictEqual(output, expected)
  })

})
