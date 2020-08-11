// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. 
// If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].


// i: Given a array list of daily temperatures, T.
// o: return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.
// c: T.length ranges from 1 - 30000, each temperature will be an integer in range 30 - 100.
// e: T.length = 1

// abstract: inner loop counting numer of days until the next highest temperature, or 0 if not found. 

// f - dailyTemperatures(T)
  // store output array daysTilWarmerList.
  // loop through T.
    // store count var daysTilWarmer = 0.
    // inner loop start at current outer iteration of T.
      // if inner itertaion is greater than outer iteration,
        // subtract outer iteration index from inner iteration index = daysTilWarmer.
        // break out of inner loop by setting inner iteration value equal to T.length 
  // return daysTilWarmerList.
//

