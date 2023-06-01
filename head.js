const assertEqual = require('./assertEqual')

const head = function(array){
  return array[0]
}

assertEqual(head([2, 3, 4]), 2)