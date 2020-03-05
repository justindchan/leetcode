// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Notes:

// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

// -psuedocode-
// I: a matrix, n x n or n x m
// O: return the entire image, flipped horizontally and inverted
// C: 1 <= A.length = A[0].length <= 20, all elements in matrix are either 0 or 1
// E: 

// function that takes in one parameter (matrix)
// for each row in matrix
  // reverse the front to end
  // for each element in each row
    // invert the values from 0 -> 1 and vice versa
// return the matrix

var flipAndInvertImage = function(A) {
  A.forEach((row) => {
    row.reverse();
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        row[i] = 1;
      } else if (row[i] === 1) {
        row[i] = 0;
      }
    }
  })
  return A;
};