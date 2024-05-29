//JSON.stringify- converts javascript objects to JSON strings
const person = { name: "Kartikeya", age: 26 };
const personJSON = JSON.stringify(person);
console.log(personJSON);
// JSON.parse- converts JSON string to javascript object
const JSONString = JSON.parse(personJSON);
console.log(JSONString);
