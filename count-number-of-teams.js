// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// Example 1:

// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

// Example 2:

// Input: rating = [2,1,3]
// Output: 0
// Explanation: We can't form any team given the conditions.

// Example 3:

// Input: rating = [1,2,3,4]
// Output: 4
 
// Constraints:

// n == rating.length
// 1 <= n <= 200
// 1 <= rating[i] <= 10^5


// I: rating, an array of soldiers (integers), there are n soldiers standing in a line
// O: return the number of valid teams you can form  
// C: n == rating.length, 1 <= n <= 200, 1 <= rating[i] <= 10^5
// E: 

//
//Explanation:
//The basic idea here is that we're keeping track of two arrays: one that lists the number of integers after rating[i] that are greater than rating[i], and another that lists the number of integers after rating[i] that are less than rating[i]. We do this with nested for loops.

// For the input [2,5,3,4,1], this yields the following arrays:

// [ 3, 0, 1, 0, 0 ]
// [ 1, 3, 1, 1, 0 ]
// We then use another nested forloop, where i only increases up until the third to last integer in rating. If rating[j] > rating[i] then we know we can add greaterThan[j] teams to our total number of teams. The "teams" this represents is effectively (Player i, Player j, Player x where x is a number after j greater than j).

// Similarly, If rating[j] < rating[i], then we can add lessThan[j] number of teams to our result.

// Full Solution:

// /**
//  * @param {number[]} rating
//  * @return {number}
//  */
const numTeams = (rating) => {
  if(rating.length < 3) return 0;
  let result = 0;

  let greaterThan = new Array(rating.length).fill(0);
  let lessThan = new Array(rating.length).fill(0);

  for(let i = 0; i < rating.length; i++) {
      for(let j = i + 1; j < rating.length; j++) {
          if(rating[j] > rating[i]) {
              ++greaterThan[i];
          } else if(rating[j] < rating[i]) {
              ++lessThan[i];
          }
      }
  }
      
  for(let i = 0; i < rating.length - 2; i++) {
      for(let j = i + 1; j < rating.length; j++) {
          if(rating[j] > rating[i]) {
              result += greaterThan[j];
          } else if(rating[j] < rating[i]) {
              result += lessThan[j];
          }
      }
  }

  return result;    
};

