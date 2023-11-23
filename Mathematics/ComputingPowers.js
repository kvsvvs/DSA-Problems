function ComputingPowers(number, power) {
  if (power === 0) {
    return 1;
  }
  if (power === 1) {
    return number;
  }
  let product = 1;
  while (power > 0) {
    product = number * product;
    power--;
  }
  return product;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number ", (num1) => {
  rl.question("Enter the power ", (num2) => {
    const result = ComputingPowers(num1, num2);
    console.log(`${num1} raised to the power of ${num2} is equal to ${result}`);
    rl.close();
  });
});
