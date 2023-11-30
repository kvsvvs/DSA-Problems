function kadanesAlgorithm(arr) {
  let maxEndingHere = arr[0],
    maxSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

function maxCircularSubarray(arr) {
  let maxKadane = kadanesAlgorithm(arr);
  let maxWrap = 0,
    totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    arr[i] = -arr[i]; // Invert the elements of the array
  }

  maxWrap = totalSum + kadanesAlgorithm(arr);

  return maxWrap > maxKadane && maxWrap !== 0 ? maxWrap : maxKadane;
}

// Example usage
const array = [5, -2, 3, 4];
console.log(maxCircularSubarray(array));
