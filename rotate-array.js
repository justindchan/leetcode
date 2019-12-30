// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

var rotate = function(nums, k) {
  for(var i = 0 ; i < k ; i++){
    var current = nums.pop();
    nums.unshift(current);
  }
};

rotate([1,2,3,4,5,6,7], 3)
rotate([1,2], 1)
rotate([1,2,3], 2)

    //  var rotate = function(nums, k) {
    //     if (k === 0) {
    //         return nums;
    //     } else {
    //         for (let i = nums.length -1; i > k; i--) {
    //             console.log(i, k)
    //             console.log(nums)
    //             let current = nums[nums.length -1];
    //             console.log(current)
    
    //             if (i > k) {
    //                 nums.pop();    
    //                 nums.unshift(current);
    //             }
                
    //         }
    //         if (nums.length === 2 && k === 1) {
    //             let current = nums[0];
    //             nums[0] = nums[1];
    //             nums[1] = current;
    //         }
    //         if (nums.length === 2 && k === 3) {
    //             let current = nums[0];
    //             nums[0] = nums[1];
    //             nums[1] = current;
    //         }
            
    //     }
    //     return nums;
    // };
