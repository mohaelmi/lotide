const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) return false;
  else {
    for(let i in array1){
      if(array1[i] !== array2[i]) return false
    }
  }
  return true
}


const assertArraysEqual =  function(arr1, arr2) {
  if(eqArrays(arr1, arr2)){
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
} 

assertArraysEqual([1,'2',3], [1,2,3]) // => Fail
assertArraysEqual([1,2,3], [1,2,3], true) // => Pass
assertArraysEqual([1, 5 ,3], [1,2,3], false) // => Fail