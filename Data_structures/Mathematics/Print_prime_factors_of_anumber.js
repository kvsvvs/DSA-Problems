function printPrimeFactors(number) {
  if (number <= 1) {
    return 1;
  }
  for (let i = 2; i * i <= number; i++) {
    while (number % i == 0) {
      console.log(i);
      number = number / i;
    }
  }
  if (number > 1) {
    console.log(number);
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number to find its prime factors ", (num) => {
  console.log("The prime factors of the number are as follows ");
  printPrimeFactors(num);
  rl.close();
});
