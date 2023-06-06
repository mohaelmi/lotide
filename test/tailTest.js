const assertEqual = require('../assertEqual')
const tail = require('../tail')



const arr = [1,2,3];
let result = tail(arr);
console.log(result);
assertEqual(result[0],  2);
assertEqual(result[1],  3);