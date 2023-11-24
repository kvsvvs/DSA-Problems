function ReverseArray(arr) {
  let temp = 0;
  let j = arr.length - 1;
  for (let i = 0; i < j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
  let result = ReverseArray(array);
  console.log(`The reversed array is [${result}]`);
  rl.close();
});
