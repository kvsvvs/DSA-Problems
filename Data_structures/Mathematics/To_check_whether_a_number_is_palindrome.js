const { parse } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let reverseNumber = 0;
rl.question("Enter the number to be checked ", (number) => {
  let workingNumber = parseInt(number);
  while (workingNumber > 0) {
    let quotient = workingNumber % 10;
    reverseNumber = reverseNumber * 10 + quotient;
    workingNumber = Math.floor(workingNumber / 10);
  }
  if (parseInt(number) === reverseNumber) {
    console.log("Number is palindrome");
  } else {
    console.log("Number is not palindrome");
  }
  rl.close();
});
