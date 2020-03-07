// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

 

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5
 

// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

// -planning
// I: an array of size 2N, containing N+1 unique elements, exactly one of these elements is repeated N times
// O: return the element repeated N times
// C: A.length is greater than or equal to 4, and less than or equal to 10000. values of A are greater than or equal to 0, and less than or equal to 10000, A.length is even
// E: - 

// use set?
// assign new Set
// loop through A
  // check if current element is already in Set
    // yes - return element
    // else - add current element to Set

var repeatedNTimes = function(A) {
  let seen = new Set();
  for (let i = 0; i < A.length; i++) {
    if (seen.has(A[i])) {
      return A[i];
    } else {
      seen.add(A[i]);
    }
  }
};