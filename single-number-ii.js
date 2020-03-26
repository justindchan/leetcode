// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99


// I: nums, a non-empty array of integers
// O: the one element in nums that only occurs once
// C: in nums, every element appears three times except for one - which appears exactly once.  linear runtime complexity, no extra memory 
// E: 

var singleNumber = function(nums){
  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    // if index of current does equals last index of current, return current
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};