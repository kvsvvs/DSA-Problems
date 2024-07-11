function PrefixSum(arr) {
  let preFixSum = 0;
  for (let i = 0; i < arr.length; i++) {
    preFixSum = preFixSum + arr[i];
    arr[i] = preFixSum;
  }
  return arr;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = PrefixSum(array);
  console.log(`The PrefixSum Array is as follows [${result}]`);
  rl.close();
});
