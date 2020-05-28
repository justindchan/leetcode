// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000


// I: array called nums, only containing binary
// O: output a number representing the size of the longest consecutive occurence of 1
// C: input array contains only binary, length of input array is positive and less than 10,000
// E: if array length is one, if array is all 0

// findMaxConsecutiveOnes = f(nums)
  // assign count
  // assign max
  // handle edge case if nums length is 1
  // loop through nums
    // if nums i is 0
      // reset count 
    // else nums i is 1 
      // if current is 1  
        // increment count 
      // if count is greater than max
        // set max equal to count
  // return max;
//

var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let max = 0;
  if (nums.length === 1) {    
    return nums[0]
  } 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count = 0;
    } else {
      if (nums[i] == 1) {
        count++;
      }
      if (count > max) {
        max = count;
      }
    }
  }   
  return max;
};

// beats 39.54% of javascript solutions