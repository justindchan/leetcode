// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. 
// The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. 
// If it doesn't exist, output -1 for this number.

// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number; 
// The second 1's next greater number needs to search circularly, which is also 2.

// Note: The length of given array won't exceed 10000.


// i: given a circular array, nums.
// O: print the next greater number for ever element
// c: length of input array <= 1000.
// e: array length less than 3.

// abstract: can use dual iteration to check for each element if there is greater.  
// circular search? - mirroring the input so we can check to the right of each element, simulating a circular data structure.
// using an index stack.


// Approach one: https://www.youtube.com/watch?v=ARkl69eBzhY
// f - nextGreaterElements (nums)
  // store length of nums.
  // create outpur array filled with placeholder -1's.
  // create stack for storing indexes for reference.
  // loop to n times 2, length of the array times two, extended the length of the array times two.
    // while stack has values and nums of stack peak is less than nums of i modulo the length of input
      // set the index in output of to pof stack equal to nums of i modulo length if input
  // if current i is less than length of input, meaning that we havent reached the end of the array, 
    // push current i onto stack, pushing the index of current i onto the stack.
//


const nextGreaterElements = function(nums) {
  const n = nums.length;
  let output = Array(n).fill(-1);
  let stack = [];
  for (let i = 0; i < n*2; i++) {
    while (stack.length && nums[stack[stack.length-1]] < nums[i % n]) {
      output[stack[stack.length-1]] = nums[i % n];
      stack.pop();
    }
    if (i < n) {
      stack.push(i)
    }
  }
  return output
};

// Runtime: 100 ms, faster than 98.96% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 41.6 MB, less than 93.75% of JavaScript online submissions for Next Greater Element II.


// Appraoch 2: pushing values instead of indexes to stack.  easier to understand without modulo.
var nextGreaterElements = function(nums) {
  const stack = nums.slice().reverse()
  const res = []
  for (var i = nums.length - 1; i >= 0; i--) {
    while(stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop()
    }
    if (stack.length) {
      res.unshift(stack[stack.length - 1])
    } else {
      res.unshift(-1)
    }
    stack.push(nums[i])
  }
  return res
}

// Runtime: 156 ms, faster than 44.27% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 43.5 MB, less than 30.21% of JavaScript online submissions for Next Greater Element II.


// Appraoch 3: 
// NOTE: Other solutions where they had a for loop going over double the size of the input array and doing '%' (modulo) and stuff like that. While that is a smart way to do it, I think the following approach helped me think in a better/cleaner way.
// NOTE: We push the indexes of the elements in the stack and not the elements themselves. Just read the solution and try to go over this case (nums = [1,4,2,1,2]), you will get what it's doing.
var nextGreaterElements = function(nums) {
  const ret = [];
  const stack = [];
  
  //paranoid base case.
  if (!nums || nums.length < 1) return ret;
  
  //normal case: while iterating over the array if we find an element which is  bigger
//than one in the stack, set ret[`smaller element from stack`] to the current
//larger element found.
  for (let i = 0; i < nums.length; i++) {
      while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
          const smallerEleIndexFromStack = stack.pop();
          ret[smallerEleIndexFromStack] = nums[i];
      }
      stack.push(i);
  }

//Now, we again begin from the start of nums and deal with elements
//for which we couldn't find a 'next bigger element' in the previous for loop
//Example: nums = [1,4,2,1,2]. After the first loop, the stack would still hold the
//indexes 1, 2 and 4 since we couldn't find next elements bigger than nums[1],
//nums[2] and nums[4].
  for (let i = 0; i < nums.length; i++) {
      while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
          const smallerEleIndexFromStack = stack.pop();
          ret[smallerEleIndexFromStack] = nums[i];
      }
  }

//Finally, still there would be some elements for which there was no 'next greater element'
//In the case of nums = [1,4,2,1,2], 4 would be such an element. So we just go over the
//remaining elements in the stack and assign -1 to them in ret array.
  const remaining = stack.length;
  for (let i = 0; i < remaining; i++) {
      ret[stack.pop()] = -1;
  }

  return ret;
};