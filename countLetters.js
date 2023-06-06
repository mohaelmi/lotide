const countLetters = (string) => {
  const result = {}
  for(let character of string){
    if(character !== ' '){
      if(!result[character]){
      //object['l'] = 1
      result[character] = 1
      }else {
        result[character] += 1
      }  
    }
  }
  return result;
}

module.exports = countLetters


