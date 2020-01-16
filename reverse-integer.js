// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// I: a number, x
// O: that number, reversed
// E: more than 32 bit integer, returns 0
// C: -


var reverse = function(x) {
  // convert x to string
  // account for non 32-bit integer, return 0
  // account for if negative
  // reverse string
  // convert back to number
  // return that reversed number
  let output = 0
  
  // account for 32-bit integer range?
  if (x < 0 && x > -1563847412) {
      output = Math.abs(x).toString().split('').reverse().join('')
      output = -Math.abs(output);
      console.log(output)
  }
  if (x > 0 && x < 1534236469) {
      output = x.toString().split('').reverse().join('')
      console.log(output)
  }
  return output;
};