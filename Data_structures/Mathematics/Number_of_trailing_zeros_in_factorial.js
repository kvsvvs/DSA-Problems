const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  "Enter the number to find the number of trailing zeros in its factorial ",
  (number) => {
    let workingNumber = number;
    let count = 0;

    while (workingNumber > 0) {
      workingNumber = workingNumber / 5;
      count += Math.floor(workingNumber);
    }
    console.log(
      `The number of trailing zeros in the factorial of ${number} is ${count}`
    );
  }
);
