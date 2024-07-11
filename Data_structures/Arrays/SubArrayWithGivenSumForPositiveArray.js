function SubarrayWithGivenSumPositive(arr, targetSum) {
  let currentSum = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    currentSum = currentSum + arr[end];

    while (currentSum > targetSum && start < end) {
      currentSum = currentSum - arr[start];
      start++;
    }

    if (targetSum === currentSum) {
      return [start, end];
    }
  }
}
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
const targetSum = Array.from({ length: 51 }, (_, i) => i + 100).reduce(
  (a, b) => a + b,
  0
);
console.log(targetSum);
const result = SubarrayWithGivenSumPositive(largeArray, targetSum);
console.log(result);
