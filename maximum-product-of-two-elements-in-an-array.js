// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Example 3:

// Input: nums = [3,7]
// Output: 12

// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3


// i: given the array of integers, nums.
// o: you will choose two different indices i and j of that array - then return the maximum value of (nums[i]-1)*(nums[j]-1).
// c: nums.length ranges from 2 to 500; elements in nums range from 1 to 10^3.
// e: nums.length is 2, 1, 0. 

// abstract: Find the two greatest elements in nums, subtract 1 from each, then multiply both together to find the output. 

// f - maxProduct(nums) 
  // storage for first greatest element;
  // storage for second greatest element;
  // storage for output, max;
  // loop through nums
    // if (current is greater than first greatest)
      // set second equal to first;
      // set first equal to current;
    // else if (current is greater than second)
      // set second equal to current;
  // set max is equal to  (first - 1)*(second - 1);
  // return max;
//

const maxProduct = (nums) => {
  let first = 0;
  let second = 0;
  let max = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  max = (first - 1)*(second - 1);
  return max;
}

// Runtime: 64 ms, faster than 98.49% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
// Memory Usage: 37 MB, less than 39.94% of JavaScript online submissions for Maximum Product of Two Elements in an Array.

