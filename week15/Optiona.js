function findMode(arr) {
  //Start Coding Here
  let counts = {};
  let maxCount = 0;
  let mode = null;

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (maxCount < counts[num]) {
      maxCount = counts[num];
      mode = num;
    }
  }
  return mode;
}

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7
