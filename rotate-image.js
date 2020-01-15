// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

var rotate = function(matrix) {
// -- in place transposition for N x N matrix.
  for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
          let temp = A[j][i];
          A[j][i] = A[i][j];
          A[i][j] = temp;
      }
  }
  // reverse each array now. must use ES6 syntax to achieve constant space.
  for (let k = 0; k < matrix.length; k++) {
    for(let i = 0, j = matrix[k].length-1; i < j; i++, j--) {
        [matrix[k][i], matrix[k][j]] = [matrix[k][j], matrix[k][i]];
    }
  }
};