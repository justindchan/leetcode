// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

// Example 1:

// Input: [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// Students with heights 4, 3 and the last 1 are not standing in the right positions.

// build the correct or of heights by sorting another array, then compare the two arrays. 


var heightChecker = function(heights) {
  // console.log(heights.sort(sortNum));
  // console.log([...heights].sort(sortNum))
  let sortedHeights = [...heights].sort(sortNum);
  let counter = 0;
  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sortedHeights[i]) {
          counter++;
      }
  }
  return counter;
};

var sortNum = ((a, b) => a - b)

// for some reason, if the first console.log runs, the code breaks, something to do with .osrt needing spread operator and also not returning an array by default?

// Runtime: 72ms, beats 43.93% 
// Memory Usage: 34.8MB, beats 89.12%