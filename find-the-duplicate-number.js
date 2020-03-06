// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:
// Input: [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.


// -psuedocode-
// I: array of numbers
// O: the value of the duplcate elements
// C: only one duplicate number but could be repeated more than once, read-only array, constant space O(1), time coimplexity < O(n2)
// E: account for no duplicatees? return -1

// SOLUTION USING SET AND CONSTANT TIME LOOKUP, O(n) time, O(n) space
// assign storage for new Set
// loop through array
  // if element is present in Set
    // return that element
    // else - add element to Set

var findDuplicate = function(nums) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return nums[i];
    } else {
      seen.add(nums[i]);
    }
  }
  return -1;
};


// SOLUTION USING JS ARRAY METHODS - slower
// loop through array
  // for each element, 
    // check if index of element is equal to last index of element
      // else, return value
      
// var findDuplicate = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
//       return nums[i];
//     }
//   }
// };