// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]


// i: an array of integers, where each element is equal to or greater than 1 and less than or equal to n (n equals the size of the array).
// o: all elements of [1,n] inclusive that do not appear in this array.
// c: O(1) space, O(n) time, returned list does not count as extra space. 
// e: array length 1?

// findDisappeared - f(nums)
  // store output array - []
  // store max value - max = nums.length
  // loop 1 -> max
    // if current i is not included in nums, 
      // push current i to output
  // return output 
//

// O(1) space, O(n^2) time
const findDisappearedNumbers = function(nums) {
  let disappeared = [];
  let max = nums.length;
  for (let i = 1; i <= max; i++) {
    if (!nums.includes(i)) {
      disappeared.push(i)
    }
  }
  return disappeared;
};
// Runtime: 9380 ms, beats 0%.
// Memory Usage: 44.8 mb, beats 77%.


// using extra storage?, O(n) time
const findDisappearedNumbers = function(nums) {
  let occurences = {};
  let missingNums = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    occurences[num] = true;
  }
  for (let j = 1; j <= nums.length; j++) {
    if (!occurences[j]) {
      missingNums.push(j);
    }
  }
  return missingNums;
};

// Runtime: 176 ms, beats 32.51%.
// Memory Usage: 46.8 mb, beats 36.71%