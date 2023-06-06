const map = (arr, callback) => {
  let newArr = []
  for(let item of arr){ 
    newArr.push(callback(item))
  }
  
  return newArr
  
}

console.log(map)

module.exports = map
