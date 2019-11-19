// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

var reverseWords = function(s) {
  let output = '';
  let arr = s.split(' ');
  if (arr.length === 1) {
      return arr[0].split('').reverse().join('')
  }
  for (let i = 0; i < arr.length; i++) {
      let reversed = arr[i].split('').reverse().join('');
      if (i < arr.length -1) {
          output += reversed + ' ';
      } else if (i = arr.length -1) {
          output += reversed;
      }
  }
  return output;
};

reverseWords("Let's take LeetCode contest") // "s'teL ekat edoCteeL tsetnoc"