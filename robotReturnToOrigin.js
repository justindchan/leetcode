//  There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
//  The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
//  Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.


//  equal number of U's to D's and L's to R's will return the robot to the origin?
//  I: string of letters consisting U's, D's, L's, and R's each of which equates to a move possibility in one of the 4 cardinal directions. 
//  O: boolean whether the move set returns the robot to the origin
//  C: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
//  E: empty string returns true.

var judgeCircle = function(moves) {
  // iterate through input string, 
  // count the occurence of U's, D's, L's, and R's
  // if number of U's === number of D's AND number of L's === number of R's, return true, 
  // otherwise return false. 
  let count = {};
  [...moves].forEach((element) => {
      if (element === 'U' || element === 'D' || element === 'L' || element === 'R') {
          if (!count[element]) {
              count[element] = 1;
          } else {
              count[element]++;
          }
      }
  })
  if (count.L === count.R && count.U === count.D) {
      return true;
  } else {
      return false;
  }
};

judgeCircle('LLUU');  // false
judgeCircle('UUDD');  // true