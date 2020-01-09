// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// I: an array of nums
// O: the same array, sorted
// C: modify arrya in AnimationPlaybackEvent, and minimize total number of operations
// E: -

var moveZeroes = function(nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          nums.splice(i, 1)
          zeroCount++;
          i--;
      }
  }
  for (let j = 0; j < zeroCount; j++) {
      nums.push(0)
  }
  return nums;
};

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

moveZeroes([0,1,0,3,12]) // [1,3,12,0,0]
moveZeroes([0,0,1]) // [1,0,0]