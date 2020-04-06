// Given an array nums of integers, return how many of them contain an even number of digits.
 
// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.
 
// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5


// I: nums, an array of integers
// O: return how many of them contain an even number of digits
// C: length of input array is 1 -> 500, elements in nums are 1 -> 10^5
// E: 

// f - findNumbers(nums)
  // assign storage for output - evenNumbers
  // loop through nums [i]
    // count how many digits current i consists of 
    // if length of current is even
      // increment evenNumbers
  // output evenNumbers
//

var findNumbers = function(nums) {
  let evenNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      evenNumbers++;
    }
  }
  return evenNumbers;
};

findNumbers([12, 345, 2, 6, 7869]) // 2

