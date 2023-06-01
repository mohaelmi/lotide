const assertArraysEqual = require('./assertArraysEqual')




const map = (arr, callback) => {
  let newArr = []
  for(let item of arr){ 
    newArr.push(callback(item))
  }
  
  return newArr
  
}

const myCallBack = (item)=>{
  return item = item[0]
} 

const words = ["ground", "control", "to", "major", "tom"];

const result = map(words, myCallBack)
console.log(result)


assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]) // => Pass
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't']) // => Pass
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]) // => Fail