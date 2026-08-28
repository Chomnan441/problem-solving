const vowels = "aeiou";
function countVowels(text) {
  //Start Coding Here
  if (typeof text !== "string") {
    return `plz input text only`;
  }
  let newText = text.toLocaleLowerCase();
  let count = 0;

  for (let i of newText) {
    if (vowels.includes(i)) {
      count += 1;
    }
  }
  return count;
}

let result1 = countVowels("hellooo A UU II EE");
console.log(result1); // 11

let result2 = countVowels("TECHUP UP ");
console.log(result2); // 3
