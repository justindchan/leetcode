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
// E: 

// busyStudent - f(startTime, endTime, queryTime)
  // storage for output integer - numberOfBusyStudents\
  // loop through startTime and through endTime simultaneously
    // if queryTime is is equal to or greater than the absolute value difference between startTime[i] and endTime[i]
      // increment output 
  // return output
//

