// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.  

var intersection = function(nums1, nums2) {
  let output = []
  for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
          if (!output.includes(nums1[i])) {
              output.push(nums1[i])
          }
      }
  }
  return output;
};

intersection([1,2,2,1], [2,2])  //  [2]
intersection([4,9,5], [9,4,9,8,4])  //  [9,4]