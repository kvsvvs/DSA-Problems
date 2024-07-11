function SecondLargestElement(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];
  if (arr[1] > arr[0]) {
    largest = arr[1];
    secondLargest = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = SecondLargestElement(array);
  console.log(`The second largest element in the array is ${result}`);
  rl.close();
});
