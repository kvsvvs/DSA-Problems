function AllDivisors(number) {
  for (let i = 1; i * i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
      if (i != number / i) {
        console.log(number / i);
      }
    }
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number to find its divisors ", (num) => {
  console.log("the divisors of the given number are ");
  AllDivisors(parseInt(num));
  rl.close();
});
