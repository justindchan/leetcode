// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Example 1:

// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
// Example 2:

// Input: startTime = [4], endTime = [4], queryTime = 4
// Output: 1
// Explanation: The only student was doing their homework at the queryTime.
// Example 3:

// Input: startTime = [4], endTime = [4], queryTime = 5
// Output: 0
// Example 4:

// Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
// Output: 0
// Example 5:

// Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
// Output: 5
 

// Constraints:

// startTime.length == endTime.length
// 1 <= startTime.length <= 100
// 1 <= startTime[i] <= endTime[i] <= 1000
// 1 <= queryTime <= 1000


// I: two integer arrays, startTime and endTime; one integer, querytime.
// O: the number of students doing their homework at the time, queryTime.
// C: startTime and endTime length is equal and ranges from 1 - 100; elements in startTime and endTime range from 1 - 1000; queryTime ranges from 1 - 1000. 
// E: startTime and endTime length = 1.

// busyStudent - f(startTime, endTime, queryTime)
  // storage for output integer - numberOfBusyStudents\
  // loop through startTime and through endTime simultaneously
    // if absolute difference b/w startTime and endTime is greater than or equal to queryTime,
      // increment output 
  // return output
//

const busyStudent = function(startTime, endTime, queryTime) {
  let numberOfBusyStudents = 0;
  let numberOfStudents = startTime.length;
  if (numberOfStudents === 1) {
      if (startTime[0] == endTime[0] && startTime[0] == queryTime) {
        return 1;
      }
      if (queryTime >= startTime && queryTime <= endTime) {
          return 1;
      }
  }
  for (let i = 0; i < numberOfStudents; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      numberOfBusyStudents++;
    }
  }
  return numberOfBusyStudents;
};

// Runtime: 60 ms, faster than 68.06% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.