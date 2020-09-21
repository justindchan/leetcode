// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
// Note:

// All words in words and S will only consists of lowercase letters.
// The length of S will be in the range of [1, 50000].
// The length of words will be in the range of [1, 5000].
// The length of words[i] will be in the range of [1, 50].


// i: a string, S; a dictionary of words as an array, words.
// o: return the number of words[i] that is a subsequence of S.
// c: all characters in inputs are lowercase, S.length ranges from 1 - 50000, words.length ranges from 1 - 5000, words[i].length ranges from 1 - 50.
// e: 

// abstract: check if if character in each word can be found in S using dual iteration.