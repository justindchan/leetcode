// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// I: an array of nums
// O: the same array, sorted
// C: modify arrya in place, and minimize total number of operations
// E: -

// moveZeroes - f(nums)
  // initlize zeroCount
  // loop through nums
    // if a zero is found
      // splice it out
      // increment zeroCount
      // decrement i to resume from last index
  // while zeroCount is greater than 0
    // push a 0 onto the end of nums
    // decrement zeroCount
  // return nums
//

var moveZeroes = function(nums) {
  let zeroCount = 0;
  for (let i = 0, numsLen = nums.length; i < numsLen; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount++;
      i--;
    }
  }  
  while (zeroCount > 0) {
    nums.push(0);
    zeroCount--;
  }
  return nums;
};

// made optimizations to original code.
// Runtime: 76ms, beats 52.11%.
// Memory Usage: 37.1MB, beats 24.12%.

moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
moveZeroes([0,0,1]) // [1,0,0]


// does not fulfill space complexity
// var moveZeroes = function(nums) {
//     let output = [];
//     let zeroCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zeroCount++
//         } else {
//             output.push(nums[i])
//         }
//     }
//     for (let j = 0; j < zeroCount; j++) {
//         output.push(0)
//     }
//     return output;
// };