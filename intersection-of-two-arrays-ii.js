// for each element in first array, count occurence of each element
  //  for each element in second array, count occurence of each element
  
//  for each key value in both objects, 
  //  if occurence of element in one object is less than occurence of element in other object,     
    //  push that element to the output array the lesser number of times it occurs, .  

var countOccurences = function (nums) {
    let occurences = {};
    for (let i = 0; i < nums.length; i++) {
        if (!occurences[nums[i]]) {
            occurences[nums[i]] = 1;
        } else {
            occurences[nums[i]]++;
        }
    }
    return occurences;
}

var intersect = function(nums1, nums2) {
  let occurences1 = countOccurences(nums1);
  let occurences2 = countOccurences(nums2);
  let output = [];
  
  console.log(occurences1)
  console.log(occurences2)

  for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
          if (occurences1[nums1[i]] < occurences2[nums1[i]]) {
              for (let j = occurences1[nums1[i]]; j > 0; j--) {
                  output.push(nums1[i]);
              }
          } else if (occurences1[nums1[i]] > occurences2[nums1[i]]) {
              for (let k = occurences2[nums1[i]]; k > 0; k--) {
                  output.push(nums1[i]);
              }
          //  not satisfying all edge cases.    
          } else if (occurences1[nums1[i]] == occurences2[nums1[i]]) {
              console.log(occurences1[nums1[i]])
              for (let l = occurences1[nums1[i]]; l > 0; l--) {
                  
                  output.push(nums1[i]);
                  
              }
          }
      }
  }
  return output;
};

intersect([1,2,2,1], [2,2]); // edge cases flipping 
intersect([1,2], [2,1])  // edge cases flipping