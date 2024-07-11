function SumOfDigits(num) {
  let workingNum = Math.abs(num);
  function recursiveSum(n) {
    if (n < 10) {
      return n;
    }
    return (n % 10) + recursiveSum(Math.floor(n / 10));
  }
  return recursiveSum(workingNum);
}
console.log(SumOfDigits(1234)); // 10
console.log(SumOfDigits(-567)); // 18
