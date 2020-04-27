// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 
// Note:

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9


// I: a fixed length array of integers
// O: the same array, with each occurence of zero, duplicated in place and shifting hte remaining elements to the right
// C: arr will have length 1 - 10000, arr[i] will be an integer 0 - 9.  Don't return anything.
// E: no zeroes in the array

// duplicateZeroes = f (arr) 
  // loop through arr
    // if current is 0
      // insert another 0 after it (splice)
      // contents of arr shifts down and length remains same (pop)
//

const duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i+1, 0, 0);
      arr.pop();
      i++;
    }
  }
};

duplicateZeros([1,2,0,2,1]) // [1,2,0,0,2]
// 4/27/2020
// Runtime: 64 ms, faster than 89.71% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Duplicate Zeros.