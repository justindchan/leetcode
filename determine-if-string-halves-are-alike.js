// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// abstract: split string and then count number of vowels

// i: string of even length.
// o: boolean whether halves are alike depending on number of vowels found.
// c: 
// e:


const halvesAreAlike = (s) => {
  const n = s.length;
  // declare vowels
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  // split string
  const firstHalf = s.slice(0, n/2);
  const secondHalf = s.slice(n/2);
  // count vowels
  let firstCount = 0;
  let secondCount = 0;
  // loop through strings, count vowels found in each
  for (let i = 0; i < n/2; i++) {
    if (vowels.includes(firstHalf[i])) {
      firstCount++;
    }
    if (vowels.includes(secondHalf[i])) {
      secondCount++;
    }
  }
  return firstCount === secondCount ? true : false;
}

// Runtime: 80 ms, faster than 87.30% of JavaScript online submissions for Determine if String Halves Are Alike.
// Memory Usage: 39.4 MB, less than 59.28% of JavaScript online submissions for Determine if String Halves Are Alike.