// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]
// Output: 1

// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: [2, 2, 3, 1]
// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


// i: given a non-empty sarray of integers
// o: return the third maximum number in the array, if this does not exist, return the max number
// c: time complexity must be O(n), 
// e: input array has length 0, 1, or 2

// thirdMax - f(nums)
  // account for edge cases
    // if nums.length is less than 3
      // return the max value found in nums 
  // turn nums into a SET
  // ensure the SET is sorted or the array was pre-sorted
  // return the third to last index (third max value) as SET[SET.length -3]
// 