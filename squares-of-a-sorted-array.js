// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.


// I: an array of integers, A, sorted in non-decresing order
// O: return an array of the suqares of each number, also sorted in non-decreasing order
// C: length of A is 1 to 10000, elements in A are -10000 to 10000, A is pre sorted in non-decreasing order
// E: A.length = 1

// sortedSquares - f(A)
  // loop through and square each element in A 
  // sort the modified array in non decreasing order
  // return A
//

const sortedSquares = function(A) {
  for (let i = 0, ALen = A.length; i < ALen; i++) {
    A[i] = A[i] * A[i];
  }
  A.sort(function(a,b) {
    return a - b;
  });
  return A;
};

sortedSquares([-4,-1,0,3,10]) // [0,1,9,16,100]

// Runtime: 108ms, beats 84.91%
// Memory Usage: 42.2MB, beats 90.67% 