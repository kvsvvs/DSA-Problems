function MostFrequentElement(arr) {
  let frequencies = new Map();
  let maxCount = 0;
  let mostFrequentElement = arr[0];

  for (let num of arr) {
    let count = (frequencies.get(num) || 0) + 1;
    frequencies.set(num, count);
    if (count > maxCount) {
      maxCount = count;
      mostFrequentElement = num;
    }
  }
}
const array = [1, 3, 3, 3, 2, 2, 4, 4, 4, 4, 5];
console.log(MostFrequentElement(array));
