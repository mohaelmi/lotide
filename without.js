const without = function(source, itemsToRemove) {
  let result = []
  if(itemsToRemove === undefined) return source
  for(let i =0; i < source.length; i++){
    if(source[i] !== itemsToRemove[i]) {
      result.push(source[i])
    }
  }

return result
}

module.exports = without

