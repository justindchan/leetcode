// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

var removeDuplicates = function(nums) {
  // while current is equal to pointer, remove pointer
  let i = 0;
  while (i < nums.length -1) {
      let current = nums[i];
      let pointer = nums[i + 1];
      if (current === pointer) {
        nums.splice(i + 1, 1)  
      } else {
          i++
      }
  }
  return nums.length;
};
removeDuplicates([1,1,2]); // 2