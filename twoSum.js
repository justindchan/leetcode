// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// I:  array of integers, a target integer
// O:  the indices of the two numbers such that they add up to a specific target
// C:  cannot use the same element twice to sum
// E: 

var twoSum = function(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j ++) {
          if (nums[i] + nums[j] === target) {
              output.push(i);
              output.push(j);
              return output;
          }
      }
  }
};
twoSum([2, 7, 11, 15], 9);