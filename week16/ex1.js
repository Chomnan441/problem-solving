function capitalizeWords(sentence) {
  //Start Coding Here
  if (typeof sentence !== "string") {
    return `plz input string only`;
  }
  return sentence
    .split(" ")
    .map((arr) => arr[0].toLocaleUpperCase() + arr.slice(1))
    .join(" ");
}

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"
