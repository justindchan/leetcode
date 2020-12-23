// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:

// Input: n = 3
// Output: [-1,0,1]

// Example 3:

// Input: n = 1
// Output: [0]
 
// Constraints:

// 1 <= n <= 1000


// abstract, if odd, append 0 to the array.  initlaize i at 1 and loop until i is less than or equal to n/2, floored.  push i and -i to results array.

// sumZero - (n) 
  // if n is odd, append 0 to array, if not just declare array.
  // interate starting at 1, until i is less than or equal to n divided by 2, floored, increment i
    // push i and -i to result array each loop 
  // return results array
//

const sumZero = (n) => {
  let sumZ =  [];
  if (n % 2 ==! 0) {
    sumZ.push(0);
  }
  for (let i = 1; i <= Math.floor(n/2); i++) {
    sumZ.push(i, -i)
  }
  return sumZ;
}

sumZero(5) // [0,1,-1,2,-2]

// Runtime: 76 ms, faster than 93.35% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 39.3 MB, less than 51.23% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.