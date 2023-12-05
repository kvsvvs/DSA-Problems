function findFirstOne(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
      result = mid;
      return result;
    } else if (arr[mid] < 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
function CountOnes(arr) {
  let firstOne = findFirstOne(arr);
  if (firstOne === -1) {
    return 0;
  }
  let totalCount = arr.length - firstOne;
  return totalCount;
}
let arr = [0, 0, 0, 1, 1, 1, 1];
console.log("Number of 1s in the array:", CountOnes(arr));
