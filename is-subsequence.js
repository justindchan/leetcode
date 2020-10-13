// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 10^4
// Both strings consists only of lowercase characters.

// i: two strings to compare against one another.
// o: boolean true or false.
// c: 
// e:

// abstract: iterate through both i and j simultaneously, checking for equality between current s and current j.  if we are able to iterate to the end of s, then isSubstring = true.

var isSubsequence = function(s, t) {
  let i = 0;
  if (s=== "") return true;
  for(let n=0; n<t.length; n++){
      if(t[n] === s[i]){
          i++;
          if(i==s.length){
              return true;
          }
      }
  }
  return false;
};

//clever 
let isSubsequence = (s, t, i = 0) => {
  for (let j = 0; i < s.length && j < t.length; ++j)
      if (s[i] == t[j])
          ++i;
  return i == s.length;
};

// 2 pointer approach
var isSubsequence = function(s, t) {
  if(t.length < s.length) return false;
  let i=0;
  let j=0;
  while(i <t.length){
      if(s[j] ==t[i]) j++;
      i++;
  }
  return j == s.length;
};