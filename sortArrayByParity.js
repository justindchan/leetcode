// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

// I: an unsorted array: A
// O: a sorted array consisting of all the even elements of A followed by all the odd elements of A.
// C:  
// E: 
var sortArrayByParity = function(A) {
  let evens = [];
  let odds = [];
  A.forEach((element) => {
      element % 2 === 0 ? evens.push(element) : odds.push(element);
  })
  return evens.concat(odds);
};