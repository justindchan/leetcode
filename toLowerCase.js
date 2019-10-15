// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
// Extra Credit: do not use the built in method.

var toLowerCase = function(str) {
  // return str.toLowerCase();

  // hex code for letter 'A' is 0x41 and for letter 'a' is 0x61. That's a diff of 0x20.
  let i = 0;
  let lowerCase = "";
  
  while (i < str.length) {
      lowerCase += String.fromCharCode(str.charCodeAt(i) | 0x20);
      i++;
  }
  return lowerCase;
};

// another implementation
const toLowerCase = (str) => {
  //Calculate Ascii diff from a to A
  const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
  
  return Array
      .from(str)
      .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
      .join('');
};