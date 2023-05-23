
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else if ((actual !== expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countOnly = function(allItems, itemToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(itemToCount[item]);
    if (itemToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;

      }
    }
  }

  return results;
  
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Fang",
  "Salima",
  "Joe"
];

let result1  = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

