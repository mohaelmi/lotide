const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) return false;
  else {
    for(let i in array1){
      if(array1[i] !== array2[i]) return false
    }
  }
  return true
}


const assertArraysEqual =  function(actual, expected) {
  if(eqArrays(actual, expected)){
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
} 



const words = ["ground", "control", "to", "major", "tom"];

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

const result = map(words, myCallBack)

console.log(result)


assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]) // => Pass
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't']) // => Pass
assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], [ 'g', 'c', 't', 'm', 't' ]) // => Fail