const takeUntil = function (array, callback) {
  const newArr = []
  //iterate an array
  for(let val of array) { 
    //invoke callback(val)
    if(callback(val)){
      break;
    }
    newArr.push(val)
  }

  return newArr
}


module.exports = takeUntil

