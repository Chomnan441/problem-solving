function isPalindrome(word) {
  //Start Coding Here
  if (typeof word !== "string") {
    return `plz input text only`;
  }
  let trimWord = word.trim();
  let reWord = word.split("").reverse().join("");
  if (trimWord === reWord) {
    return true;
  }
  return false;
}

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
