// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100


// i: an array of integers, nums.
// o: return the number of good pairs.
// c: nums.length ranges from 1 to 100; elements in nums are integers ranging 1 to 100. 
// e: nums.length is one.

// abstract: counter increment each time inner loop finds a match.

// f - numIdenticalPairs(nums)
  // initalize counter
  // loop through nums
   // for each iteration in nums, loop through remaining elements
     // if value at inner iteration is equal to value of current outer iteration 
//

const numIdenticalPairs = function(nums) {
  let pairCount = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      if (nums[j] == nums[i]) {
        pairCount++;
      }
    }
  }
  return pairCount;
};

numIdenticalPairs([1,2,3,1,1,3]) // 4

// Runtime: 64ms, beats 97.69%.
// Memory usage: 36.8 MB, beats 11.28%.