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

const without = function(source, itemsToRemove) {
  let result = []
  if(eqArrays(source, itemsToRemove)) return []
  for(let i =0; i < source.length; i++){
    if(source[i] !== itemsToRemove[i]) {
      result.push(source[i])
    }
  }

return result
}


//test cases
let num = [1, 2, 3]
console.log(without(num, [1])) // => [2, 3]
assertArraysEqual(num, [1, 2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]