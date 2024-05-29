const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = new Object();
obj2.key1 = "value1";
obj2.key2 = "value2";

// constructor function method
function Person(name, age) {
  (this.name = name), (this.age = age);
}
const obj3 = new Person("Kartikeya", 26);

console.log(obj1);
console.log(obj2);
console.log(obj3);
