// Boyer-Moore Voting Algorithm
function MajorityElement(arr) {
  let candidate = null;
  let count = 0;
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count = count + (num === candidate ? 1 : -1);
  }
  count = 0;
  for (let num of arr) {
    if (candidate === num) {
      count++;
    }
  }
  if (count >= arr.length / 2) {
    console.log(`${candidate} is the majority element`);
  } else {
    console.log(`There is no majority element`);
  }
}
