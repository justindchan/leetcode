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

