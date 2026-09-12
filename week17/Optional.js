function findLongestWord(text) {
  //Start Coding Here
  let newWorldSet = text.split(" ");
  let longestWorld = newWorldSet[0];
  for (let i = 1; i <= newWorldSet.length - 1; i++) {
    if (longestWorld.length < newWorldSet[i].length) {
      longestWorld = newWorldSet[i];
    }
  }
  return longestWorld;
}

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"
