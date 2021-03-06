// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// Example:

// Input:  [1,2,1,3,2,5]
// Output: [3,5]
// Note:

// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?


// I: an array of numbers, nums - which has exactly 2 elements that appear only once and all other elements appear twice
// O: an array of the two elements that only appear once
// C: 
// E:

// easy js way lol
var singleNumber = function(nums) {
  let twoUnique = [];
  nums.forEach((num) => {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      twoUnique.push(num);
    }
  })
  return twoUnique;
}