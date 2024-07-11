function MaximumEvenOddSubArray(arr) {
  let maxEvenLength = 0;
  let maxOddLength = 0;
  let currentEvenLength = 0;
  let currentOddLength = 0;
  let evenStart = 0;
  let oddStart = 0;
  let maxEvenStart = 0;
  let maxOddStart = 0;
  arr.array.forEach((num, i) => {
    if (num % 2 == 0) {
      currentEvenLength++;
      currentOddLength = 0;
      if (currentEvenLength > maxEvenLength) {
        maxEvenLength = currentEvenLength;
        maxEvenStart = evenStart;
      }
    } else {
      currentOddLength++;
      currentEvenLength = 0;
      if (currentOddLength > maxOddLength) {
        maxOddLength = currentOddLength;
        maxOddStart = oddStart;
      }
    }
    if (currentEvenLength === 1) evenStart = i;
    if (currentOddLength === 1) oddStart = i;
  });
}
