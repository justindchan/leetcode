// /**
//  * @param {string} address
//  * @return {string}
//  */
var defangIPaddr = function(address) {
  var output = [];
  for (let i = 0; i < address.length; i++) {
      if (address.charAt(i) === '.') {
          output.push('[.]');
      } else {
          output.push(address.charAt(i));
      }
  }
  return output.join('');
};