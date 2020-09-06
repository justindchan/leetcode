// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 10^5.
// All elements in the matrix are distinct.


// i: gieven an m * n matrix of distinct numbers, matrix.
// o: return all lucky numbers in matrix.
// c: 
// e: 

// abstract: m = number of rows, n = number of columns.  lucky numbers = an element of the matrix such that it is the minimum element in its row and maximum in it's column. 
// - First, get each row's minimum, then of those numbers, check if each is the maximum of each column (sub index). 

// f - luckyNumbers(matrix)
  // store output array - lucky = [];
  // loop through matrix
    // loop thorugh each row
      // store for minimum each iteration - min = 0;
      // find minimum element of each row  
      // if current is the minimum, 
        // at that index+subindex, check if current is also the maximum in its column
          // push current to output array if so;
  // return output;
//

var luckyNumbers  = function(matrix) {
  let happyArr = [];
  const cLen = matrix.length;
  const rLen = matrix[0].length;
  
  for (let i = 0; i < cLen; i++) {
    outer: 
    for (let j = 0; j < rLen; j++) {
      const currEl = matrix[i][j];
      
      for (let c = 0; c < cLen; c++) {
        if (c !== i && currEl < matrix[c][j]) continue outer;
      }
      for (let r = 0; r < rLen; r++) {
        if (r !== j && currEl > matrix[i][r]) continue outer;
      }
      
      happyArr.push(currEl);
    }
  }
  return happyArr;
};
