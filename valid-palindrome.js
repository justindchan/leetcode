// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


// I: a string 
// O: boolean 
// C: consider only alphanumeric characters and ignore cases
// E: emptry string is a valid palindrome

// two pointers starting at beginning and end, iterate 1 at a time, checking for equality on the fly
// if inequaltiy is found, return false, 
// if no inequality is found, return true
// account for non alphanumeric characters and disregard cases

const valid = 'ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

var isPalindrome = function(s) {
    // reference abc123
    // scrub the string // push only alphanumeric to scrubbed string // account for lowercase 
    let scrubbed = '';
    for (let h = 0; h < s.length; h++) {
        if (valid.includes(s[h])) {
            scrubbed += s[h].toLowerCase();
        }
    }
    // palindrome validation
    for (let i = 0, j = scrubbed.length - 1; i < j; i ++, j--) {
        if (scrubbed.indexOf(scrubbed[i]) != scrubbed.indexOf(scrubbed[j])) {
            return false;
        }
    }
    // if scrubbed is equal to scrubbed reversed, return true // otherwise return false // SLOWER
    // if (scrubbed != scrubbed.split('').reverse().join('')) {
    //     return false
    // }
    return true;
};

isPalindrome('race a car') // false
