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

// convert x to string
// account for non 32-bit integer, return 0
// account for if negative
// reverse string
// convert back to number and return 

var reverse = function(x) {
  const MAX = Math.pow(2, 31) -1;
  const MIN = Math.pow(2, 31) * -1;
  let output = 0;
  if (x < 0) {
      output = Math.abs(x).toString().split('').reverse().join('')
      output = -Math.abs(output);
  }
  if (x > 0) {
      output = x.toString().split('').reverse().join('')
  }
  if (output > MAX || output < MIN) {
      return 0;
  }
  return Number(output);
};