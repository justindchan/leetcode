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
  let list = A[0].split('');
  let listOccurences = {};
  // console.log(list);
  for (let i = 0; i < list.length; i++) {
      letterOccurences = 0;
      if (listOccurences.hasOwnProperty(list[i]) === false) {
          listOccurences[list[i]] = 1;
      } else {
          listOccurences[list[i]]++;
      }
      // console.log(listOccurences);
      
      
      // console.log(listOccurences);
  }
  for (let j = 1; j < A.length; j++) {
         
      splitString = A[j].split('');
      for (let k = 0; k < splitString.length; k++) {
          if (splitString[k] === list[i]) {
              letterOccurences++;
          }
      }
      // console.log(list[i])
      // console.log(letterOccurences);

      // if (A[j].split('').includes(list[i])) {
      //     letterOccurences++;
      //     console.log(letterOccurences);
      // }
          
      }
  console.log(listOccurences);
  
};