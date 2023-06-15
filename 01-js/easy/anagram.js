/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // //console.log(str1+" "+str2);
  str1 = str1.replace(/[^a-zA-Z0-9!]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z0-9!]/g, "").toLowerCase();
  // //console.log(str1+" "+str2);
  
  // if (str1.length !== str2.length) {
  //   return false;
  // } else {
  //   let sortedStr1 = Array.from(str1).sort().join("");
  //   let sortedStr2 = Array.from(str2).sort().join("");
    
  //   return sortedStr1 === sortedStr2;
  // }
  if (str1.length !== str2.length) {
      return false;
  }
  
  let charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

module.exports = isAnagram;
