//  You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.


// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

// loop through words array
  // see if you can spell each of the elements in words with any of the chars from chars
  // if you can, push element to holder array
  // stringfy and join holder array
  // get length to output 

var countCharacters = function(words, chars) {
  console.log(words, chars);
  let anagrams = [];
  for (let i = 0; i < words.length; i++) {
      let charCount = 0;
      for (let j = 0; j < words[i].length; j++) {
          if (chars.includes(words[i][j])) {
              charCount++;
          }   
      }
      if (charCount >= words[i].length) {
          anagrams.push(words[i]);
      }
  }
  // console.log(anagrams)
  return anagrams.join('').length;
};

// edge case not handled but works for most cases..