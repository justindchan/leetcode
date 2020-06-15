// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]

// Example 1:

// Input: [2,1]
// Output: false
// Example 2:

// Input: [3,5,5]
// Output: false
// Example 3:

// Input: [0,3,2,1]
// Output: true
 
// Note:

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000 


// I: given an array, A, of integers
// O: return true if and only if it is a valid mountain array
// C: 
// E: if A.lnegth is 2 or less, if the peak is either the first or last index

// validMountainArray - f(A)
  // if length of A is less than or equal to 2, return false
  // if first index of A or last index of A is the peak, return false
  // store up - boolean flag to toggle if we are ascending in value or descending, determines if we have past the peak yet or not helping ensure we only have one peak
  // loop through A
    // if up is true
      // if current A is less than the previous A, set up flag to false
      // else if current A is equal to the previous A, return false
    // else (up is false)
      // if current A is greater or equal to previous A, return false
  // return true
//

