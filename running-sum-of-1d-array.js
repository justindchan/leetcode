// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 
// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6


// i: given an array of numbers, nums.
// o: retunr the running sum of nums.
// c: nums.length range is 1 to 1000, nums[i] ranges from -10^6 to 10^6.
// e: nums.length = 1

// NOTES:
// can be solved by progresive summing all elements, than popping the last element off of nums, then repeat. 
// can be solved recursively, base case is nums.length === 1, recursive case, nums.length < 1.

// Psuedocode:
// storage for output - sums
// f - runningSum(nums)
  // if (nums.length === 1)
    // add element to beginning of sums and return sums
  // else 
    // sum all elements in nums 
    // unshift sum to sums
    // pop off last element in nums
    // call runningSum(nums)
//

// works for one call, then sums has to be reset to an empty array due to scope.
let sums = [];
const runningSum = function(nums) {
  if (nums.length === 1) {
    sums.unshift(nums[0]);
  } else {
    let sum = nums.reduce((a, c) => a + c, 0); 
    sums.unshift(sum);
    nums.pop();
    runningSum(nums);
  }
  return sums;
};

// PASSING SOLUTION:
// loop through nums
// start at second index, set current to equal the sum of current and the index previous (which will be the sum of all previous elements)
// on the second interation, at the third index, set current to equal sum of current plus the previous index value.
const runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i-1];
  }
  return nums;
}

runningSum([1,1,1,1,1]) // [1,2,3,4,5]
runningSum([1,2,3,4]) // [1,3,6,10]

// Runtime: 72ms, beats 77.86%.
// Memory Usage: 37MB, beats 100%.

// Final Notes:
// trying to use recursion actually made this problem harder to solve.  in the future, try to not use recursion as much as possible, iteration is much simpler and in this case, way more efficient. 
