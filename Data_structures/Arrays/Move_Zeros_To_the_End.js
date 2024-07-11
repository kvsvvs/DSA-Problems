function MoveZeroToEnd(arr) {
  let zeroIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != 0) {
      temp = arr[i];
      arr[i] = arr[zeroIndex];
      arr[zeroIndex] = temp;
      zeroIndex++;
    }
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
  let result = MoveZeroToEnd(array);
  console.log(`The updated Array is as follows [${result}]`);
  rl.close();
});
