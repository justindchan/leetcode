// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

var plusOne = function(digits) {
  var i = digits.length - 1;
  digits[i]++;
  while (digits[i] > 9) {
    digits[i] = 0;
    if (i > 0) {
      digits[i - 1]++;
      i--;
    } else {
      digits.unshift(1);
      break;
    }
  }
  return digits;
};

// var plusOne = function(digits) { 
// debugger
//     let output = [];
//     let result = [];
//     let temp = parseInt(digits.join('')) + 1;
// //     console.log(temp);
//     output = temp.toString().split('');
// //     console.log(temp.toString().split(''));
//     for (let i = 0; i < output.length; i++) {
//        result.push(parseInt(output[i]));
//     }
//     return result;
//     console.log(result)
// };