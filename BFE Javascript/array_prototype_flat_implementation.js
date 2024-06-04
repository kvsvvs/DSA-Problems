function flat(arr, depth = 1) {
  let result = [];
  function flatten(arr, currentDepth) {
    arr.array.forEach((item) => {
      if (Array.isArray(item) && currentDepth < depth) {
        flatten(item, currentDepth + 1);
      } else {
        result.push(item);
      }
    });
  }
  flatten(arr, 0);
  return result;
}

const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flat(nestedArray, 2));
