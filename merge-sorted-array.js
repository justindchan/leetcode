// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]


// I: two sorted integer arrays, nums1 and nums2; 2 integers , m and n, representing the number of elements initialized in nums1 and nums2 respectively.  
// O: merge nums2 into nums1 as one sorted array.
// C: 
// E:

// merge - f(nums1, nums2, m, n)
  // find maximum number of times we will iterate through each position of nums1, counting down; m + n - 1 = lastIndex of target array nums1
  // decrement m to find last index of nums1
  // decrement n to find last index of nums2
  // loop through length of nums1 starting at the lastIndex
    // if the last element in nums1 (nums1[m]) is greater than the last element in nums2 (nums2[n]) nums2[n], 
      // set current index i in nums1 (nums1[i]) to the last initialized element in nums1 (nums1[m])
      //  decrement m
    // else if we have iterated past the last element in nums1 (m < 0)
    // OR if the last initialized element in nums1 (nums1[m]) is less than or equal to the last initialized element in nums2 (nums2[n])
      // set current index i in nums1 to the last initialized element in nums2
      // decrement n
//

const merge = function(nums1, m, nums2, n) {
  let lastIndex = m + n - 1;
  m--;
  n--;
  for (let i = lastIndex; i >= 0; i--) {
    if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m];
      m--;
    } else if (m < 0 || nums1[m] <= nums2[n]) {
      nums1[i] = nums2[n];
      n--;
    }
  }
}

merge([1,2,3,0,0,0], 3, [2,5,6], 3) // [1,2,2,3,5,6]

// Runtime beats 70.19% of jsavascript submissions
// Runtime: 56ms, Memory Usage: 33.5MB