//Insert element at the end of the given Array- as done but stl method "push"
function insertAtTheEnd(arr, number) {
  return (arr[arr.length] = number);
}

// Remove an element from the end of the array- as done by stl method "pop"
function removeLastElement(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  arr.length = arr.length - 1;
}

//Add an element at the beginning of an array- as done by stl method "unshift"
function addElementInTheBeginning(arr, element) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr;
}

//Remove an element from the beginning of an array- as done by stl method "shift"
function removeElementInTheBeginning(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

// Transform each element of an array- as done by stl method map.
function customMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i], i, arr);
  }
  return result;
}
// Suppose we define a callback function as square
function square(num) {
  return num * num;
}
// or we define a callback function as double
function double(num) {
  return 2 * num;
}

// Create a new array with filtered elements- as done by the stl method filter
function customFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
// for this custom filter we can have call back function such as isEven
function isEven(number) {
  return number % 2 === 0;
}

// Reverse the order of elements in an array- as done by stl method reverse
function customReverse(arr) {
  let j = arr.length - 1;
  let temp = 0;
  for (let i = 0; i < j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
