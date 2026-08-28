function sumEvenNumbers(numbers) {
  //Start Coding Here
  let sum = 0;
  for (let i of numbers) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28
