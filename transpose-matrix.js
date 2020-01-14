// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

// Example 1:

// Input:  [[1,2,3],
//          [4,5,6],
//          [7,8,9]]

// Output: [[1,4,7],
//          [2,5,8],
//          [3,6,9]]

// Example 2:

// Input:  [[1,2,3],
//          [4,5,6]]

// Output:  [[1,4],
//           [2,5],
//           [3,6]]

// -- passing solution for N x N or M x N matrix, using additional space. 
var transpose = function(A) {
  let rows = A.length;
  let columns = A[0].length;
  let transposed = [];
  for (let i = 0; i < columns; i++) {
      transposed[i] = [];
      for (let j = 0; j < rows; j++) {
          transposed[i][j] = A[j][i];
      }
  }
  return transposed;
};

// -- in place transposition for N x N matrix.
// var transpose = function(A) {
//     for (let i = 0; i < A.length; i++) {
//         for (let j = i; j < A.length; j++) {
//             let temp = A[j][i];
//             A[j][i] = A[i][j];
//             A[i][j] = temp;
//         }
//     }
//     return A;
// };

