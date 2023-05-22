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
  console.log(result)
} 

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]