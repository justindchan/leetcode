// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var isAnagram = function(s, t) {
  // use object value pairs, store in temp
  let isEqual = false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length;  i++) {
      if (!obj1[s[i]]) {
          obj1[s[i]] = 1;
      } else {
          obj1[s[i]]++;
      }
  }
  for (let j = 0; j < t.length; j++) {
      if (!obj2[t[j]]) {
          obj2[t[j]] = 1;
      } else {
          obj2[t[j]]++;
      }
  }
  // console.log(obj1, obj2)
  // console.log(Object.entries(obj1).sort((a, b) => b[0].localeCompare(a[0])) , Object.entries(obj2).sort((a, b) => b[0].localeCompare(a[0])))
  obj1 = Object.entries(obj1).sort((a, b) => b[0].localeCompare(a[0]));
  obj2 = Object.entries(obj2).sort((a, b) => b[0].localeCompare(a[0]));
  // console.log(JSON.stringify(obj1), JSON.stringify(obj2))
  if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
      isEqual = true; 
  }
  return isEqual;
};

