function RecursiveSum(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + RecursiveSum(number - 1);
  }
}
let sum = RecursiveSum(5);
console.log(sum);
