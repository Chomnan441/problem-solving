function findMax(nums) {
  //Start Coding Here
  let maxValue = nums[0];
  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }
  return maxValue;
}

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2
