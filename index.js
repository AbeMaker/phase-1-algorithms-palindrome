
function reverse(word){
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord=reverse(word);
  return word===reversedWord
}

/* 
  Add your pseudocode here
  // The word abba can be pronounced the same if started with the prefix and also doing the same with the suffix
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
