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

module.exports = flatten