function HCF(a, b) {
  if (b === 0) {
    return a;
  } else {
    return HCF(b, a % b);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the first number ", (num1) => {
  rl.question("Enter the second number ", (num2) => {
    const gcd = HCF(parseInt(num1), parseInt(num2));
    const product = parseInt(num1) * parseInt(num2);
    const lcm = product / gcd;
    console.log(`the LCM of ${num1} and ${num2} is ${lcm}`);
    rl.close();
  });
});
