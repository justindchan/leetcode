// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".


// I:  list of types of Stones that are Jewels: J, Set of Stones: S
// O:  number of Jewels
// C:  S and J will consist of letters and have length at most 50, The characters in J are distinct.
// E:  - 


var numJewelsInStones = function(J, S) {
  var numOfJewels = 0;
  for (let i = 0; i < J.length; i++) {
      for(let k = 0; k < S.length; k++) {
          if (J[i] === S[k]) {
              numOfJewels++;
          }
      }    
  }
  return numOfJewels;
};