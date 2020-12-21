// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
  // move vertically by one unit,
  // move horizontally by one unit, or
  // move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Example 1:

// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:

// Input: points = [[3,2],[-2,2]]
// Output: 5
 
// Constraints:

// points.length == n
// 1 <= n <= 100
// points[i].length == 2
// -1000 <= points[i][0], points[i][1] <= 1000


// abstract:  the greatest difference between eother x or y coordinate will equal the number of seconds it took to traverse to that point.
// i: the points to be visited, in sequence.
// o: the minimum number of seconds required to visit all points
// c: points.length = n, 1 <= n <= 100, points[i].length == 2, -1000 <= points[i][0], points[i][1] <= 1000. 
// e:  

// notes: go as far diagonally first

// function = minimumTimeToVisitAllPoints (points)
  // variable to store totalTime = 0;
  // loop through points, start at first point
    // find greatest difference between either x or y of first and next point
    // the greater absolutevalue of subtracting x[i] from y[i] += totalTime 
  // return totalTime
//

const minTimeToVisitAllPoints = (points) => {
  let totalTime = 0;
  for (let i = 0; i < points.length; i ++) {
    let xDiff = 0;
    let yDiff = 0;
    if (points[i+1]) {
      xDiff = Math.abs(points[i][0] - points[i+1][0]);
      yDiff = Math.abs(points[i][1] - points[i+1][1]);
    }
    totalTime += Math.max(xDiff, yDiff)
  }
  return totalTime;
};

minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]) // 7

// Runtime: 84 ms, faster than 63.36% of JavaScript online submissions for Minimum Time Visiting All Points.
// Memory Usage: 40.4 MB, less than 27.59% of JavaScript online submissions for Minimum Time Visiting All Points.