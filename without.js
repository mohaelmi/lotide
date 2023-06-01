const assertArraysEqual = require('./assertArraysEqual')


const without = function(source, itemsToRemove) {
  let result = []

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