// MATH
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// Constraints:

// 1 <= n <= 10^5


// I: n, an integer number
// O: return the difference between the product of n's digits and the sum of n's digits
// C: n is 1 -> 10^5
// E: n only has 1 digit

// f - subProductSum - (n)
  // assign storage for result

  // assign storage for product of n's digits
  // get product

  // assign storage for sum of n's digits
  // get sum

  // subtract, product - sum = result
  // return result  
//

var subProductSum = function(n) {
  let result = 0;
  let product = 1;
  let sum = 0;
  let digits = [];
  let strN = n.toString()
  // get digits
  for (let i = 0; i < strN.length; i++) {
    digits.push(Number(strN[i]))
  }
  // get product and sum
  for (let j = 0; j < digits.length; j++) {
    product = product * digits[j];
    sum = sum + digits[j];
  }
  // get result
  result = product - sum;
  return result;

};



