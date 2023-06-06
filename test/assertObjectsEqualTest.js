const assertObjectsEqual = require('../assertObjectsEqual')

// console.log(`Example label: ${inspect(actual)}`);
assertObjectsEqual({a: 'a', b: 'b'}, { a: 'a', b: 'b' })  //    => pass
assertObjectsEqual({a: 'a', c: 'b'}, { a: 'a', b: 'b' })  //    => Fail
assertObjectsEqual({a: 'a', b: 'b'}, { a: 'aaa', b: 'b' })  //  => Fail
