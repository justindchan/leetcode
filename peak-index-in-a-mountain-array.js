// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:

// Input: [0,1,0]
// Output: 1

// Example 2:

// Input: [0,2,1,0]
// Output: 1
// Note:

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A is a mountain, as defined above.


// I: an array, a mountain
// O: the index of the peak of the mountain
// C: A length is greater than 3 and less than 10000, values of elements in A range between 0 and 10^6, A has to be a mountain
// E: -

var peakIndexInMountainArray = function(A) {
    // assign storage for peakIndex, set to 0
    // assign storage for currentPeakValue, set to A[0]
    // loop through mountain
      // if current iteration is greater than currentPeak, 
        // reassign currentPeakValue to current iteration value
        // reassign peakIndex to current iteration index
    // return peak index
    
};