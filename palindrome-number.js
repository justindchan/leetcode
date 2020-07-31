// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up:
// Coud you solve it without converting the integer to a string?


// i: an integer, x.
// o: boolean whether integer reads the same front to back as back to front.
// c: solve without string reversal? (mathematical way)
// e: integer is one digit, integer is negative

// mathematical method:  
// - using modulo 10 to isolate the last digit to push to holder array, using Math.floor(x/10) to move decimal over and remove last digit. 
// - after the last digit from input integer is removed, integer will equal 0.  
// - when iteration is finished, determine if palindrome and return boolean. 

// f - isPalindrome(x)
  // account for edge if negative number
    // return false
  // accout for edge one digit
    // return true
  // 
  
//