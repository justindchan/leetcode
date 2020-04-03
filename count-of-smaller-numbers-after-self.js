// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Example:

// Input: [5,2,6,1]
// Output: [2,1,1,0] 
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.


// I:  nums, an integer array 
// O:  return a new array called counts - counts[i] is the number of smaller elements to the right of counts[i] (how many elements of smaller value, but greater index than counts[i])
// C:  
// E:

// f - count smaller (nums)
  // assign storage for output array
  // i -loop through nums
    // assign storage for counting 
    // j - for each element in nums, we want to check if its value is smaller than every element to the right of it (so also if it's index is smaller too but we should be starting the nested loop from the current to save time)
      // if current i's value is less than j
        // increment count
    // push count to output array
  // return output
//

var countSmaller = function(nums) {
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
    let currentCount = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        currentCount++;
        // currentCount = currentCount + 1;
      }
    }
    counts.push(currentCount);
  }
  return counts;
};