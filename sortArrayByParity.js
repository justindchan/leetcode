// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.


// I: an unsorted array: A
// O: a sorted array consisting of all the even elements of A followed by all the odd elements of A.
// C:  
// E: 

// sortArrayByParity - f(A)
  // store evens output array
  // store odd output array
  // forEach element in A
    // if element modulo 2 is equal to 0
      // push element to evens array
    // else 
      // push element to odds array
  //return evens concatenated to odds
//

var sortArrayByParity = function(A) {
  let evens = [];
  let odds = [];
  A.forEach((element) => {
      element % 2 === 0 ? evens.push(element) : odds.push(element);
  })
  return evens.concat(odds);
};

// Runtime: 80ms, beats 83.22%
// Memory: 38.4MB 37.75%