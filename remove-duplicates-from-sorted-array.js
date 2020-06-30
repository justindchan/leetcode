// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.


// I: a sorted array of numbers, nums.
// O: return the new length of nums.
// C: modify the original array, in-place
// E: 

// removeDuplcates - f(nums)
  // initilize i
  // while current is equal to pointer, remove pointer
    // else, increment i to go to the next element
  // return nums
// 

const removeDuplicates = function(nums) {
  let i = 0;
  while (i < nums.length - 1) {
    let current = nums[i];
    let pointer = nums[i+1];
    if (current === pointer) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
}

// Runtime: 180ms, beats 15.00% of Javascript submissions
// Memeory Usage: 39MB, beats 18.33% of javascript submissions