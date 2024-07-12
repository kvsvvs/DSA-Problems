// Define a Shape superclass
class Shape {
  draw() {
    throw new Error("This method should be overridden in subclasses");
  }
}

// Define a Circle subclass
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

// Define a Square subclass
class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

// Define a Triangle subclass
class Triangle extends Shape {
  draw() {
    console.log("Drawing a triangle");
  }
}
function drawShape(shape) {
  shape.draw(); // Polymorphism in action
}
let circle = new Circle();
let square = new Square();
let triangle = new Triangle();

drawShape(circle); // Outputs: Drawing a circle
drawShape(square); // Outputs: Drawing a square
drawShape(triangle); // Outputs: Drawing a triangle
