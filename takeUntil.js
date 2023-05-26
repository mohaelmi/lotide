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



const takeUntil = function (array, callback) {
  const newArr = []
  //iterate an array
  for(let val of array) { 
    //invoke callback(val)
    if(!callback(val)) { 
      newArr.push(val)
    }else if(callback(val))  return newArr
  }

  return newArr
}





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const sliceArr = takeUntil(data1, v => v < 0)
assertArraysEqual(sliceArr, [1,2,5,7,2]) // => Pass

const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]); // => Pass


