function isEvenNumber(num) {
  //Start Coding Here
  if (typeof num !== "number") {
    return `plz input number only`;
  }
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let result1 = isEvenNumber(4);
console.log(result1); // true

let result2 = isEvenNumber(7);
console.log(result2); // false
