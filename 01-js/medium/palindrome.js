/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
  // let strArray = Array.from(str);
  // for (let i = 0, j = strArray.length-1; i < strArray.length/2,j > 0; i++,j--){
  //   if(strArray[i] !== strArray[j])
  //     return false;
  // }
  // return true;
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = isPalindrome;
