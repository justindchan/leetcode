// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * param {number} n
 * return {string[]}
 */

// I: n, the range of the ouput
// O: an array containing the string representation of numbers from 1 to n
// C: -
// E: n = 0, n < 0?

var fizzBuzz = function(n) {
  // initialize output array
  let fizzBuzz = [];
  // initialize loop at i = 1, iterate n times
  for (let i = 1; i <= n; i++) {
    // if not multiple of 3 or 5, push i to output array
    if (i % 3 !== 0 && i % 5 !== 0) {
      fizzBuzz.push(i.toString())
    }
    // if multiple of 3, push Fizz to output array
    if (i % 3 === 0) {
      fizzBuzz[i - 1] = "Fizz";
    }
    // if multiple of 5, push Buzz to output array
    if (i % 5 === 0) {
      fizzBuzz[i - 1] = "Buzz";
    }
    // should account for when i is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz[i - 1] = "FizzBuzz";
    }
  }
  return fizzBuzz;
};