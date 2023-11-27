function FrequenciesInASortedArray(arr) {
  if (arr.length === 0) return [];

  let frequencies = [];
  let count = 1;
  let currentElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      count++;
    } else {
      frequencies.push({ element: currentElement, count: count });
      currentElement = arr[i];
      count = 1;
    }
  }

  frequencies.push({ element: currentElement, count: count });
  return frequencies;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let result = FrequenciesInASortedArray(array);
  console.log(
    `The frequency of elements in the given array is as follows [${result}]`
  );
  rl.close();
});
