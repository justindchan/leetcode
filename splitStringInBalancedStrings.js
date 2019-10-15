//Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// I:  string s 
// O:  number of balanced strings
// C:  1 <= s.length <= 1000
// E:  s[i] = 'L' or 'R'

var balancedStringSplit = function(s) {
  var output = 0;
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "L") {
          balance ++;
          if (balance === 0) { output++; }
      } else {
          balance --;
          if (balance === 0) { output++; }
      }
  }
  return output;
};