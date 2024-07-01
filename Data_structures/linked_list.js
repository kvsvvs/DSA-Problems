class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Start with an empty list
  }

  append(value) {
    const newNode = new Node(value); // 1. Create a new node
    if (!this.head) {
      // 2. Check if the list is empty
      this.head = newNode; // 3. Make the new node the head
    } else {
      let current = this.head; // 4. Start at the head
      while (current.next) {
        // 5. Traverse to the last node
        current = current.next;
      }
      current.next = newNode; // 6. Link the new node at the end
    }
  }
}

export default LinkedList;
