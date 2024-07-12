/*advantages of using getters and setters over directly accessing properties in JavaScript:

1. Encapsulation
Control: They control how values are set or retrieved from an object's properties, encapsulating the internal state rather than exposing it directly.
Protection: Prevent external code from directly setting an object’s state, which can protect against unintended or harmful modifications.
2. Validation
Checking: Allows for checking or validation of data before it's stored. This ensures that only valid data modifies the object state.
Sanitization: Can also sanitize inputs, automatically adjusting values to fit necessary criteria.
3. Computed Properties
Dynamic Calculation: Enable the creation of properties that are derived from other data members or change dynamically without needing to store additional data explicitly.
Efficiency: Useful for performing calculations only when needed, rather than every time an object is modified.
4. Read-Only / Write-Only Properties
Control Access: By defining only a getter or a setter, you can make properties effectively read-only or write-only, which is useful for different types of encapsulation and interface control.
5. Maintaining Internal Consistency
Synchronization: Ensure that related properties remain synchronized as one changes. This is key in scenarios where multiple properties are interdependent.
State Management: Facilitates complex state management within objects, where changing one property might necessitate changes to others.
6. Debugging and Maintenance
Tracking Changes: Getters and setters can include logging or error reporting to monitor how and when data changes, aiding in debugging.
Future-proofing: The interface to the property remains consistent, even if the implementation behind the getter/setter changes, thus not breaking code that uses the object. */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }

  set area(newarea) {
    let aspectRatio = this.width / this.height;
    this.height = Math.sqrt(newarea / aspectRatio);
    this.width = this.height * aspectRatio;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  set perimeter(newPerimeter) {
    let aspectRatio = this.width / this.height;
    this.height = newPerimeter / 2 / (1 + aspectRatio);
    this.width = this.height * aspectRatio;
  }
}
let rect = new Rectangle(4, 3);
console.log(rect.area); // Output: 12
console.log(rect.perimeter); // Output: 14

rect.area = 24;
console.log(rect.width); // Output will be adjusted
console.log(rect.height); // Output will be adjusted

rect.perimeter = 20;
console.log(rect.width); // Output will be adjusted
console.log(rect.height); // Output will be adjusted
