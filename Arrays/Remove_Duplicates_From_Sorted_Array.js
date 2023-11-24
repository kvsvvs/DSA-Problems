function removeDuplicatedFromSortedArray(arr) {
  let uniqueIndex = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] != arr[i]) {
      arr[uniqueIndex] = arr[i + 1];
      uniqueIndex++;
    }
  }
  arr.length = uniqueIndex;
  return arr;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = removeDuplicatedFromSortedArray(array);
  console.log(`The unique array is as follows [${result}]`);
  rl.close();
});
