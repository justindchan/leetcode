//  count the occurence of each character in each string, 
//  compare the count of that character to the count of that character in the other strings.

//  Place the letters from the first string of the array into a list
// for each letter in the list{
//     count the occurrences of the letter
//     for each string in the array{
//         count the occurrences of the letter
//         if the letter occurs in the list more often than in the string{
//             decrease occurrence of letter in list to match letter in string
//         }
//     }
// }

var commonChars = function(A) {
  let output = [];
  let list = A[0].split('');
  let listOccurences = {};
  for (let i = 0; i < list.length; i++) {
      if (listOccurences.hasOwnProperty(list[i]) === false) {
          listOccurences[list[i]] = 1;
      } else {
          listOccurences[list[i]]++;
      }        
  }
  for (let j = 1; j <= A.length -1; j++) {
      let splitString = A[j].split('');
      for (let l = 0; l < list.length; l++) {
          let letterOccurences = 0;
          for (let k = 0; k < splitString.length; k++) {
              if (splitString[k] === list[l]) {
                  letterOccurences++;
              }
          }
          if (letterOccurences <  listOccurences[list[l]]) {
              listOccurences[list[l]]--;
          }
      }           
  }
  for (var key in listOccurences) {
      for (let h = 0; h < listOccurences[key]; h++) {
          output.push(key);
      }
  }
  return output;
};

commonChars(["bella","label","roller"]);