const assert = require('chai').assert
const countLetters = require('../countLetters')

//const assertEqual = require('../assertEqual')

describe("return counted letters when passed an string to #countLetters", () => {
  // it("returns [1,] for [2, 3, 4]", () => {
  //   const array = [2, 3, 4]
  //   assert.strictEqual(head(array), 2)
  // })
  it("returns 1 for character l when pass 'lighthouse in the house' ", () => {
    const countObject = countLetters("lighthouse in the house")
    assert.strictEqual(countObject['l'], 1)
  })
  it("returns 4 for character h when pass 'lighthouse in the house' ", () => {
    const countObject = countLetters("lighthouse in the house")
    assert.strictEqual(countObject['h'], 4)
  })
})


