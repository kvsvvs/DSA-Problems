function MaxDifference(arr) {
  let MaxDifference = arr[1] - arr[0];
  let minElement = arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - minElement > MaxDifference) {
      MaxDifference = arr[i] - minElement;
    }
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return MaxDifference;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = MaxDifference(array);
  console.log(`The Maximum difference  is as follows [${result}]`);
  rl.close();
});
