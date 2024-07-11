// We will be using reversal algorithm as it is the most efficient in this case Time complexity is same O(n) but space complexity is O(1)

function leftRotateArray(arr, d) {
  let n = arr.length;
  d = d % n; // Handle cases where d > n
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, n - 1);
  reverseArray(arr, 0, n - 1);
  return arr;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  rl.question(
    "Enter the number of places you want to shift the array ",
    (num1) => {
      let array = input.split(" ").map(Number);
      let result = leftRotateArray(array, num1);
      console.log(`The updated Array is as follows [${result}]`);
      rl.close();
    }
  );
});
