function findPeakElement(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

let arr = [1, 2, 3, 1];
console.log("Index of a peak element is:", findPeakElement(arr));
