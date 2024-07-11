function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let sortedArray = [];
  let lIndex = 0;
  let RIndex = 0;

  while (lIndex < left.length && RIndex < right.length) {
    if (left[lIndex] < right[RIndex]) {
      sortedArray.push(left[lIndex]);
      lIndex++;
    } else {
      sortedArray.push(right[RIndex]);
      RIndex++;
    }
  }
  return sortedArray.concat(left.slice(lIndex)).concat(right.slice(RIndex));
}
console.log(mergeSort([12, 11, 13, 5, 6, 7]));
