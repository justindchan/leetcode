// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

/**
 * param {character[][]} board
 * return {boolean}
 */

// hashset ? unique values
// js arrays or sets?

function validate(board, row, col, rowStart, colStart) {
  let item = board[row][col];
  for (let i = 0; i < board.length; i++) {
      // check colums
      if (i != col) {
          if (board[row][i] == item) {
              return false;
          }
      }
      // check rows
      if (i != row) {
          if (board[i][col] == item) {
              return false;
          }
      }
  }
  for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
          if (i != row && j != col) {
              if (board[i][j] == item) {
                  return false;
              }
          }
      }
  }
  return true;
}

var isValidSudoku = function(board) {
  let squareCount = 9;
  let rowStart = 0;
  let colStart = 0;
  while (true) {
      for (let r = rowStart; r < rowStart + 3; r++) {
          for (let c = colStart; c < colStart + 3; c++) {
              let item = board[r][c];
              if (item != ".") {
                  let isValid = validate(board, r, c, rowStart, colStart);
                  if (!isValid) {
                      return false;
                  }
              }
          }
      }
      colStart = colStart + 3;
      if (colStart == squareCount) {
          colStart = 0;
          rowStart = rowStart + 3;
      }
      if (rowStart == squareCount) {
          break;
      }
  }
  return true;
};