class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error("Abstract class Animal cannot be instantiated directly.");
    }
  }

  makeSound() {
    throw new Error(
      "Abstract method makeSound must be implemented by subclass."
    );
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}
