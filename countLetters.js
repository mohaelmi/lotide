const countLetters = (string) => {
  const result = {}
  for(let character of string){
    if(character !== ' '){
      if(!result[character]){
      result[character] = 1
      }else {
        result[character] += 1
      }  
    }
  }
  return result;
}

module.exports = countLetters


