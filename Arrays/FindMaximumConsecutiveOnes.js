function MaximumConsecutiveOnes(arr) {
  let counter = 0;
  let maxCount = 0;
  for (let num of arr) {
    if (num === 1) {
      counter++;
    } else {
      maxCount = Math.max(maxCount, counter);
      counter = 0;
    }
  }
  return Math.max(maxCount, counter); // In case the array ends with a sequence of 1s
}
