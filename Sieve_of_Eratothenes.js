function sieveOfEratothenes(number) {
  if (number <= 1) {
    return [];
    // There is no number less than one
  }
  let isPrimes = Array(number + 1).fill(true);
  isPrimes[0] = isPrimes[1] = false;

  for (let num = 2; num * num <= number; num++) {
    if (isPrimes[num]) {
      for (let multiple = num * num; multiple <= number; multiple += num) {
        isPrimes[multiple] = false;
      }
    }
  }
  return isPrimes.reduce((acc, isPrimes, index) => {
    if (isPrimes) {
      acc.push(index);
    }
    return acc;
  }, []);
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  "Enter the limit upto which you want to find the prime numbers ",
  (num) => {
    const arrayOfPrime = sieveOfEratothenes(parseInt(num));
    console.log(arrayOfPrime);
    rl.close();
  }
);
