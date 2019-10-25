// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// using a set takes 60 ms, using index of takes 3000ms
var containsDuplicate = function(nums) {
   let numSet = new Set([]);
   if (nums.length === 0 || nums.length === 1) {
       return false;
   }
   nums.forEach((element) => {numSet.add(element);})
   if (nums.length !== numSet.size) {
       return true;
   } else {
       return false;
   }
};

// --slow solution using js methods.

// var containsDuplicate = function(nums) {
//   let output = false;
//   if (nums === []) {
//       return output
//   } else {
//      for (let i = 0; i < nums.length; i++) {
//           if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
//               output = true;
//           } 
//       } 
//   }
//   return output;
// };