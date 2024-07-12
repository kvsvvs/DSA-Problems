function Human() {
  this.species = "Homo Sapiens";
}

Human.prototype.eat = function () {
  console.log("Eating Food");
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*Why Use Object.create() for Prototypal Inheritance?
The main reason to use Object.create() in this context is to establish a clean prototype chain. Here are some specific reasons:

Direct Inheritance Without Side Effects:

When you set Person.prototype directly to an instance of Human (e.g., Person.prototype = new Human();), any properties that are supposed to be unique to each Human instance would be shared among all Person instances. This is usually not desirable.
Object.create() allows for the inheritance of the prototype properties and methods without initializing an instance of Human.
Maintaining the Prototype Chain:

Using Object.create() keeps the prototype chain intact. Any changes to Human.prototype (like adding new methods) will automatically be available to all instances of Person without additional code.
Preserving Constructor Identity:

After setting Person.prototype using Object.create(), it's typical to reset the constructor property on Person.prototype to ensure that the constructor property points back to Person (e.g., Person.prototype.constructor = Person;).
This step is crucial for cases where you might need to check the constructor of an instance or when you rely on the constructor for instance creation or identification. */

Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("John", 30);

person1.greet();
person1.eat();
