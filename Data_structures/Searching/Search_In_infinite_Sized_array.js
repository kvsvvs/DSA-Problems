function findRangeAndBinarySearch(arr, target) {
  if (arr[0] === target) return 0;

  let i = 1;
  while (arr[i] < target) {
    i *= 2;
  }

  let left = i / 2;
  let right = i;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 2, 3]; // This is your infinite or very large array
let target = 3;
console.log("Target found at index:", findRangeAndBinarySearch(arr, target));
