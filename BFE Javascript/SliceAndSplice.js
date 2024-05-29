// The slice() method of arrays in JavaScript is used to extract a section of the array and return it as a new array, without modifying the original array. It essentially "slices" out a piece of the array based on the indices you provide.
const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1);

//Array splice method
// The splice() method in JavaScript is used to modify the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Key Points:

// It modifies the original array directly (it's a "mutative" method).
// It can perform several tasks: remove, replace, and add elements.
const numbers = [1, 4, 5];
numbers.splice(1, 0, 2, 3); // This will add "2" and "3" starting from index 1
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]
