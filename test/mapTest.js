const map = require('../map')
const assertArraysEqual = require('../assertArraysEqual')


const myCallBack = (item)=>{
  return item = item[0]
} 

const words = ["ground", "control", "to", "major", "tom"];

const result = map(words, myCallBack)
console.log(result)


assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]) // => Pass
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't']) // => Pass
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]) // => Fail