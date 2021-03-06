// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid. 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

// Example 3:

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3

// Example 4:

// Input: grid = [[-1]]
// Output: 1
 
// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100


var countNegatives = function(grid) {
  let negatives = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        negatives++;
      }
    }
  }
  return negatives;
};

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]); // 8

// Runtime: 72 ms, faster than 92.36% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 37.6 MB, less than 91.01% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.