// with zero indexing
function josephus(n, k) {
  if (n === 1) {
    return 0;
  } else {
    return (josephus(n - 1, k) + k) % n;
  }
}
let n = 4; // Number of people in the circle
let k = 2; // Counting off every 2nd person
console.log("The safe position is: " + (josephus(n, k) + 1)); // to offset zer based indexing
