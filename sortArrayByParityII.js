// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Note:

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

var sortArrayByParityII = function(A) {
  let evens = [];
  let odds = [];
  let sorted = [];
  let evensI = 0;
  let oddsI = 0;
  A.forEach((element) => {
    if (element % 2 === 0) {
        evens.push(element);
    }  else {
        odds.push(element);
    }
  })
  for (let i = 0; i < A.length; i++) {
      if (i % 2 === 0) {
          sorted.push(evens[evensI]);
          evensI++;
      } else {
          sorted.push(odds[oddsI]);
          oddsI++;
      }
  }
  return sorted;
};

sortArrayByParityII([4,2,5,7]) // [4, 5, 2, 7]