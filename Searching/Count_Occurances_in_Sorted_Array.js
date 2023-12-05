function IndexOfFirstOccurance(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
function IndexOfLastOccurance(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function countOccurances(arr, target) {
  let first = IndexOfFirstOccurance(arr, target);
  if (first === -1) {
    return 0;
  }
  let last = IndexOfLastOccurance(arr, target);
  let totalCount = last - first + 1;
  return totalCount;
}
let arr = [1, 2, 4, 4, 4, 5, 6];
let target = 4;
console.log("Count of target occurrences:", countOccurances(arr, target));
