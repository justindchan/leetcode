// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 
// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
 

// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

const topRow = ['qwertyuiopQWERTYUIOP'];
const midRow = ['asdfghjklASDFGHJKL'];
const bottomRow = ['zxcvbnmZXCVBNM'];

var findWords = function(words) {
    
    let output = [];
    for (let i = 0; i < words.length; i++) {
        let topCount = 0;
        let midCount = 0;
        let bottomCount = 0;

        for (let j = 0; j < words[i].length; j++) {            
            if ([...topRow[0]].includes(words[i][j])) {
                topCount++;
                if (topCount === words[i].length) {
                    output.push(words[i])
                }
            }
            if ([...midRow[0]].includes(words[i][j])) {
                midCount++;
                
                if (midCount === words[i].length) {
                    output.push(words[i])
                }
            }
            if ([...bottomRow[0]].includes(words[i][j])) {
                bottomCount++;
                if (bottomCount === words[i].length) {
                    output.push(words[i])
                }
            } 
        }
    }
    return output;
};