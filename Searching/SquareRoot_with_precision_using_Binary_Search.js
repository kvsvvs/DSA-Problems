function SquareRootWithPrecision(n, precision = 4) {
  let precisionFactor = 1 / Math.pow(10, precision);

  let start = 0;
  let end = n;
  let mid, square;

  while (end - start > precisionFactor) {
    mid = (start + end) / 2;
    square = mid * mid;

    if (Math.abs(square - n) <= precisionFactor) {
      return parseFloat(mid.toFixed(precision));
    } else if (square < n) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return parseFloat(mid.toFixed(precision));
}

console.log(SquareRootWithPrecision(2));
