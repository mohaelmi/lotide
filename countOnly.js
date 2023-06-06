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


module.exports = countOnly

