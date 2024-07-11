// Kadane's Algorithm
function MaximumSumSubArray(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];
  let s = 0;
  let end = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      s = i;
    } else {
      maxEndingHere = maxEndingHere + arr[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      end = i;
    }
  }
  return { maxSum: maxSoFar, maxSumSubArray: arr.slice(s, end + 1) };
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = MaximumSumSubArray(array);
  console.log(
    `The maximum sum sub array in the given array is as follows [${result.maxSumSubArray} and the sum is ${result.maxSum}]`
  );
  rl.close();
});
