// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

 

// Example 1:

// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers for each row is: 
// row 0 -> 2 
// row 1 -> 4 
// row 2 -> 1 
// row 3 -> 2 
// row 4 -> 5 
// Rows ordered from the weakest to the strongest are [2,0,3,1,4]
// Example 2:

// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers for each row is: 
// row 0 -> 1 
// row 1 -> 4 
// row 2 -> 1 
// row 3 -> 1 
// Rows ordered from the weakest to the strongest are [0,2,3,1]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.

// I: M x N matrix = mat (array of arrays of ones (soldiers) and zeroes (civies)), the number of weakest rows to find = k 
// O: return the indexes of the k weakest rows in the matrix ordered from weakest to strongest
// C: 
// E:

var kWeakestRows = function(mat, k) {

  // build an array of objects using destructuring
  let arrayObj = [];
  // loop through matrix to get to each row
  for (let row = 0; row < mat.length; row++) {
    // assign storage for sum of each row
    let sum = 0;
    // loop through each matrix row to get to column
    for (let col = 0; col < mat.length; col++) {
      // if soldier is found, increment sum by 1
      if (mat[row][col] == 1) {
        sum++;
      }
    }
    // push new object containing row number (index) and sum (soldier count) to arrayObj
    arrayObj.push({row, sum});
  }
  console.log(arrayObj)

  // sort the array by sum and then by smallest index
  

  // get the first k elements from the sorted array



  // let len = mat.length;
  //   if(len === 0) return [];
	
	//  /* building an array of objects using destructuring  */ 
  //   let arrayObj = [];
  //   for(let row= 0; row < mat.length; row++) {
  //     let sum = 0;
  //     for(let col= 0; col < mat[row].length; col++) {
  //       if(mat[row][col] == 1) sum++;
  //     }
  //     arrayObj.push({row, sum});
  //   }
  //   /*  sorting array by valSum,in case of equal sum then return smallest index */
  //   arrayObj.sort((a,b) => {
  //     if(a.sum == b.sum) {
  //       return a.row - b.row;
  //     }
  //     else {
  //       return a.sum - b.sum;
  //     }
  //   })

  //   /* gets the k elements from sorted array */
  //   let result = [];
  //   for(let i = 0; i < k; i++) {
  //     result.push(arrayObj[i].row)
  //   }
  //   return result;
};