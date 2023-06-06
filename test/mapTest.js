const map = require('../map')
const assert = require('chai').assert

const myCallBack = (item)=>{
  return item = item[0]
} 


describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    let output = map(words, myCallBack)
    const expected = ['g', 'c', 't', 'm', 't']
    assert.deepEqual(output, expected)
  })

})


