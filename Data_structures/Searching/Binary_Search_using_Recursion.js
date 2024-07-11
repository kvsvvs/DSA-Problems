function RecursiveBinarySearch(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return RecursiveBinarySearch(arr, target, mid + 1, right);
  } else {
    return RecursiveBinarySearch(arr, target, left, mid - 1);
  }
}
function binarySearch(arr, target) {
  return RecursiveBinarySearch(arr, target, 0, arr.length - 1);
}
let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
console.log("Index of target is:", binarySearch(arr, target));
