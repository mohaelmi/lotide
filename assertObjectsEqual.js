const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {  
    if (object1[key] !== object2[key]) {
      return false;
    }
       
  }

  return true;
};



const  assertObjectsEqual =  function(obj1, obj2) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if(eqObjects(obj1, obj2)){
    console.log(`👍👍👍 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
} 



// console.log(`Example label: ${inspect(actual)}`);
assertObjectsEqual({a: 'a', b: 'b'}, { a: 'a', b: 'b' })  //    => pass
assertObjectsEqual({a: 'a', c: 'b'}, { a: 'a', b: 'b' })  //    => Fail
assertObjectsEqual({a: 'a', b: 'b'}, { a: 'aaa', b: 'b' })  //  => Fail

