// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

var uniqueOccurrences = function(arr) {
  let count = {};
  arr.forEach((element) => {
      if (!count[element]) {
          count[element] = 1;
      } else {
          count[element]++;
      }
  })
  return Object.values(count).length === new Set(Object.values(count)).size;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]) // true
uniqueOccurrences([1, 2]) // false