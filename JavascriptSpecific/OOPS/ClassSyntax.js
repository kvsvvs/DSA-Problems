class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  displayDetails() {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of Doors: ${this.numDoors}`
    );
  }
}

const myCar = new Car("Toyota", "Corolla", 2021, 4);
myCar.displayDetails(); // Output: Make: Toyota, Model: Corolla, Year: 2021, Number of Doors: 4
