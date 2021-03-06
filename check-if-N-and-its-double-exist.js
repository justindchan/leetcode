// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 
// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.
 
// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3


// I: an array of integers, arr
// O: return true or false whether N and it's double exist
// C: arr length is atlest 2 and less than or equal to 500, elements can be positive and negative
// E: ACCOUNT FOR 0!!!

// checkIfExist = f(arr)
  // store boolean var exists = false
  // loop through arr - i
    // for each element i in arr, 
      // check if there exists element j that is element i divided by 2
        // set exists = true if so
  // return var exists
//

// account for zero, since zero times zero is zero, and we can only count the zero once, we can ensure i and j do not iterate over eachother by settin gj to iterate only if it is less than i.

const checkIfExist = function(arr) {
  debugger
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j] * 2 || arr[i] === arr[j] / 2) {
        return true;
      }
    }
  }
  return false;
};

// Beats 32.01% of js submissions
// O(n2) time, O(1) space. 


// cutty javascript methods
const checkIfExist = function(arr) {
  if(!arr.length || arr.length === 1) {
    return false;
  }
  for(let i = 0; i < arr.length; i++) {
      if(arr.includes(arr[i] * 2) && arr[i] !== 0) {
        return true;
      }
      if(arr[i] === 0 && arr.indexOf(0) !== i) {
        return true;
      }
  }
  return false;
};