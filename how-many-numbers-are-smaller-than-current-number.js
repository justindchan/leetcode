// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100


// I: nums, an array of numbers 
// O: output an array, containing the amount of of numbers that are smaller than that element in nums. each element in the output corresponds to that indexes element in nums
// C: nums.length i greater than 2 and less than 500, each element in nums is a number between 0 and 100
// E: 

var smallerNumbersThanCurrent = function(nums) {
  // assign storage for output array
  let smallerNums = [];
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // assign storage for counter variable
    let smallerCount = 0;
    // for each element in nums, loop through nums to check if nums[i] is smaller than
    for (let j = 0; j < nums.length; j++) {
      // if true, increment smallerCount
      if (nums[i] > nums[j]) {
        smallerCount = smallerCount + 1;
      }
    }
    // push smallerCount to output array
    smallerNums.push(smallerCount);
  }
  // return smallerNums
  return smallerNums;
};

smallerNumbersThanCurrent([8,1,2,2,3]) // [4,0,1,1,3]