// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666. 
// The maximum number is 9969.

// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.

// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.
 
// Constraints:

// 1 <= num <= 10^4
// num's digits are 6 or 9.

// abstract: with only changing one digit (6- 9 or 9 - 6) find the highest attainable value.

// i: a positive integer num consisting only of digits 6 and 9. 
// o: return the maximum number you can get by changing at most one digit (6 to 9 and vice versa).
// c: num is equal to or between 1 and 10^4.
// e: 

// maximum69Number - (num)
  // store for max = num
  // arrayify num
  // store array for holding tranformed numbers = []
  // loop through num, starting at first digit
    // if copy of arrayedNum i is 6, change to 9
      // push numberfied copy of mutated arrayedNum to temp
    // if copy of arrayNum i is 9,  change to 6
      // push numberfied copy of mutated arrayedNum to temp
  // find the maximum in temp.
  // return greatest between max and max in temp.
//


const maximum69Number = (nums) => {
  let max = nums;
  let numsArray = Array.from(String(nums), Number)
  let hold = [];
  for (let i = 0; i < numsArray.length; i++) {
    let temp = numsArray.slice()
    if (temp[i] === 6) {
      temp[i] = 9;
      hold.push(Number(temp.join('')));
    }
    else if (temp[i] === 9) {
      temp[i] = 6;
      hold.push(Number(temp.join('')));
    }
  }
  console.log(Math.max(...hold))
  if (Math.max(...hold) > max) {
    max = Math.max(...hold);
  }
  return max;
};


// Runtime: 68 ms, faster than 98.11% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 38.7 MB, less than 45.11% of JavaScript online submissions for Maximum 69 Number.
