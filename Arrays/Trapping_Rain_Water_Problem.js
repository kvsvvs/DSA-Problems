function TrappingRainWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;
  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] > leftMax) {
        leftMax = arr[left];
      } else {
        trappedWater = trappedWater + (leftMax - arr[left]);
      }
      left++;
    } else {
      if (arr[right] > rightMax) {
        rightMax = arr[right];
      } else {
        trappedWater = trappedWater + (rightMax - arr[right]);
      }
      right--;
    }
  }
  return trappedWater;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = TrappingRainWater(array);
  console.log(
    `The trapped rainwater in the given array is as follows [${result}]`
  );
  rl.close();
});
