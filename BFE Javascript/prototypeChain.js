let person = {
  name: "Unknown",
  speak: function () {
    console.log(`Hello, this is my ${this.name}`);
  },
};

let student = Object.create(person);
student.name = "Kartikeya";

student.speak();
