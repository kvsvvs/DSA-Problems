function SubArrayWithGivenSumNegative(arr, targetSum) {
  let cumilativeSum = 0;
  let sumMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    cumilativeSum = cumilativeSum + arr[i];
    if (cumilativeSum === targetSum) {
      return [0, i];
    }
    if (sumMap.has(cumilativeSum - targetSum)) {
      return [sumMap.get(cumilativeSum - targetSum) + 1, i];
    }
    sumMap.set(cumilativeSum, i);
  }
  return null;
}
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
const targetSum = Array.from({ length: 51 }, (_, i) => i + 100).reduce(
  (a, b) => a + b,
  0
);
console.log(targetSum);
const result = SubArrayWithGivenSumNegative(largeArray, targetSum);
console.log(result);
