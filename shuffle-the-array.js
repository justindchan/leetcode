// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]
 
// Constraints:

// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3


// i: an array consisting of 2n elements, nums; the number of each kind of element, n.
// o: return the array in the form of [x1, y1, x2, y2, ..... xn, yn].
// c: n ranges from 1 to 500, nums.length is 2n, elements ranges from 1 to 10^3.
// e: nums.length is 2.

// abstract: split array into two equal length sub-arrays, then push to output array in specified order.

// f - shuffle(nums, n)
  // store for output array - shuffled.
  // split nums into to equal length sub arrays ([x1,x2,x3,xn], [y1,y2,y3,yn]).
  // iterate through the subarrays simultaneously.
    // push current i in x subarray.
    // push current i in y subarray.
  // return shuffled
//;

