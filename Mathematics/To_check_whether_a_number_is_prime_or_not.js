const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function checkPrime(number) {
  if (number === 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i = i + 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

rl.question("Enter the number to check whether its prime or not ", (num) => {
  let number = parseInt(num);
  let isPrime = checkPrime(number);
  let result = isPrime ? "prime" : "not a prime";
  console.log(`${number} is ${result} number`);
  rl.close();
});
