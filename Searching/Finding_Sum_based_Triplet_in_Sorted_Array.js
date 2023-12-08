function findTriplet(arr, targetSum) {
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === targetSum) {
        return [arr[i], arr[left], arr[right]];
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return null;
}
let arr = [1, 2, 3, 4, 5];
let sum = 9;
console.log(findTriplet(arr, sum));
