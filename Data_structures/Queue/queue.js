class Queue {
  constructor() {
    this.items = []; // Array to store queue elements
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Return message if the queue is empty
    }
    return this.items.shift(); // Removes the first element of the array
  }

  // View the front element of the queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // View all elements in the queue
  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}
export default Queue;
