// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// must use pointer variables for temp storage other wise doesn't work.
var reverseString = function(s) {
      for (let i = 0, j = s.length-1; i < j; i++, j--) {
          const x = s[i]; 
          const y = s[j];
          s[i] = y; 
          s[j] = x;
      }
  };

  reverseString(["h","e","l","l","o"])  //  ["o","l","l","e","h"]  

  // Runtime: 140ms, beats 16.06%
  // Memory Usage: 42.2MB, beats 99.75%