const assertArraysEqual = require('./assertArraysEqual')


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