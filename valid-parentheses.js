// 1/22/2021

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Example 4:

// Input: s = "([)]"
// Output: false

// Example 5:

// Input: s = "{[]}"
// Output: true

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.


// abstract : validity = as many closing characters as opening characters to close all opened brackets. use a counter to increment up when opening brackets are found and increment down when closing brackets are found. 
// I: a string containing just the characters '(){}[]' 
// o: boolean whether the input string is valid
// c: s.length from 1 to 104
// e:

const isValid = (s) => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack[stack.length -1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        } else if (s[i] === ']') {
            if (stack[stack.length -1] === '[') {
                stack.pop();
            } else {
                return false;
            }
        } else if (s[i] === '}') {
            if (stack[stack.length -1] === '{') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

isValid('({)}') // false
isValid('(){}[]') // true

// Runtime: 84 ms, faster than 44.73% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40 MB, less than 19.94% of JavaScript online submissions for Valid Parentheses.

// Algorithm

//     Initialize a stack S.
//     Process each bracket of the expression one at a time.
//     If we encounter an opening bracket, we simply push it onto the stack. This means we will process it later, let us simply move onto the sub-expression ahead.
//     If we encounter a closing bracket, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing. Else, this implies an invalid expression.
//     In the end, if we are left with a stack still having elements, then this implies an invalid expression.

// Complexity analysis

//     Time complexity : O(n)O(n)O(n) because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1)O(1)O(1) time.
//     Space complexity : O(n)O(n)O(n) as we push all opening brackets onto the stack and in the worst case, we will end up pushing all the brackets onto the stack. e.g. ((((((((((.