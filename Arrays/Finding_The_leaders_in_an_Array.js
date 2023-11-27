function findLeadersInArray(arr) {
  let length = arr.length;
  let currentLeader = arr[length - 1];
  let leaders = [currentLeader];

  for (let i = length - 2; i >= 0; i--) {
    if (arr[i] > currentLeader) {
      currentLeader = arr[i];
      leaders.push(arr[i]);
    }
  }

  return leaders;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the elements of the array separated by space ", (input) => {
  let array = input.split(" ").map(Number);
  let leaders = findLeadersInArray(array);
  console.log(`The leaders in the array [${array}] are [${leaders}]`);
  rl.close();
});
