// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


// I: an array of strings
// O: the longest common prefix among the array
// C: all given inputs are lowercase letters
// E: return empty string if no common prefix

var longestCommonPrefix = function(strs) {
    
  // get into first array element
    // get into each element of array
      // check if each character in first element is found in sequence with the next array element at each character
        // if not found
          // return the slice of the first char to the last iteration index, cutting it at the last found common character

  
  // for (let i = 1; i < strs.length; i++) {
  //     for (let j = 0; j < strs[i].length; j++) {
  //         if (current[j] === strs[i][j]) {
  //             output += current[j]
  //         }
  //     }
  // }
};