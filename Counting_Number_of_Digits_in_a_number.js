const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let numberOfDigits = 0;
rl.question("Enter the number  ", (number) => {
  let workingNumber = parseInt(number);
  while (workingNumber > 0) {
    numberOfDigits++;
    workingNumber = Math.floor(workingNumber / 10);
  }
  console.log(
    `the number of digit in the number ${number} are ${numberOfDigits}`
  );
  rl.close();
});
