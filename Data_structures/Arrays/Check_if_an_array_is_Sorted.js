function isArraySorted(arr) {
  let sorted = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      sorted = false;
    }
  }
  return sorted;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = isArraySorted(array);
  let string = result ? "sorted" : "not sorted";
  console.log(`The given array is ${string}`);
  rl.close();
});
