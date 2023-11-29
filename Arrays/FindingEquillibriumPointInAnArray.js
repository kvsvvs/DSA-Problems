function findEquillibriumPoint(arr) {
  let totalSum = arr.reduce((acc, num) => {
    num + acc;
  }, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum = leftSum + arr[i];
  }
  return -1;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the elements of the array separated by space ", (input) => {
  let res = "";
  let array = input.split(" ").map(Number);
  let equillibriumIndex = findEquillibriumPoint(array);
  if (equillibriumIndex === -1) {
    res = `The equillibrium point in the array [${array}] is  [${array[equillibriumIndex]}]`;
  } else {
    res = "No Equillibrium point was found";
  }
  console.log(res);
  rl.close();
});
