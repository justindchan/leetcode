// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Example 3:

// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

// Example 4:

// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"

// Example 5:

// Input: s = "art", indices = [1,0,2]
// Output: "rat"

// Constraints:

// s.length == indices.length == n
// 1 <= n <= 100
// s contains only lower-case English letters.
// 0 <= indices[i] < n
// All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).


// i: a string, s; an array, indices 
// o: the string, shuffled, so that each letters' index is switched to the value found at the corresponding index in indices.
// c: s.length is equal to indices.length == n, n ranges from 1 - 100, only lowercase letters in s, values of elements in indices are 0 to n, all elements in indices are unique.
// e: n = 1.

// double iteration, using auxiliary output array

// f - restoreString(s, indices)
  // assign storage for auxiliary array - shuffled
  // loop though s and indices simultaneously
    // push current i of s to the value of current i in indices (the new index)
  // return output as a string
//

const restoreString = function(s, indices) {
  let n = s.length;
  let shuffled = [];
  for (let i = 0; i < n; i++) {
    shuffled[indices[i]] = s[i];
  }
  return shuffled.join('');
};

// Runtime: 80ms, beats 92.92%.
// Memory Usage: 38.3MB, beats 50.20%.