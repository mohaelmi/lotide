const assertArraysEqual =  function(arr1, arr2) {
  if(eqArrays(arr1, arr2)){
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
} 


const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) return false;
  else {
    for(let i in array1){
      if(array1[i] !== array2[i]) return false
    }
  }
  return true
}

const flatten = function(array) {
  let result = []
  for(let i=0; i < array.length; i++){
    if(!Array.isArray(array[i])){
      result.push(array[i])
    }else {
      for(let j in array[i]) {
        result.push(array[i][j])
      }
    }
  }
  return result
} 


let unflattedArray = [1, 2, [3, 4], 5, [6]]
newResult = flatten(unflattedArray) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(newResult, [1, 2, 3, 4, 5, 6]) // => pass
assertArraysEqual(newResult, [1, 2, 3, [4], 5, 6]) // => fail