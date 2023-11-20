const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number to find its factorial ", (number) => {
  const factorial = (number) => {
    if (number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  };
  let factorialValue = factorial(parseInt(number));
  console.log(`The factorial of ${number} is ${factorialValue}`);

  rl.close();
});
