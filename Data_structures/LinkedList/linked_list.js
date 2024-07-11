class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
  printList() {
    let current = this.head; // Start at the head
    while (current) {
      console.log(current.value); // Print the value of each node
      current = current.next; // Move to the next node
    }
  }
  delete(value) {
    if (!this.head) {
      return; // List is empty
    }
    if (this.head.value === value) {
      this.head = this.head.next; // Delete the head node
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next; // Find the node before the one to delete
    }
    if (current.next) {
      current.next = current.next.next; // Link the previous node to the next node
    }
  }
  findByValue(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  findByIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  printListUptoIndex(index) {
    let current = this.head;
    let count = 0;
    while (current && count <= index) {
      console.log(current.value);
      count++;
      current = current.next;
    }
  }
  printListRecursive(node = this.head) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this.printListRecursive(node.next);
  }
  insertAtBeginning(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  insertAtPosition(value, position) {
    if (position < 0) {
      console.log("Position must be a non-negative integer.");
      return;
    }

    const newNode = new Node(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 0;
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      console.log("Position out of bounds.");
    }
  }
  deleteFromStart() {
    if (!this.head) {
      console.log("Linked List is empty");
      return;
    }
    this.head = this.head.next;
  }
  deleteFromEnd() {
    if (!this.head) {
      console.log("The Linked list is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  deleteFromPosition(position) {
    if (position < 0) {
      console.log("The position can not be a negative number");
      return;
    }
    if (!this.head) {
      console.log("The linked list is empty");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }
    if (current && current.next) {
      current.next = current.next.next;
    } else {
      console.log("Position out of bounds");
    }
  }
  searchIterative(value) {
    if (!this.head) {
      console.log("Linked list is empty");
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  searchRecursive(value, node = this.head) {
    if (!node) {
      return null;
    }
    if (node.value === value) {
      return node;
    }
    return this.searchRecursive(value, (node = node.next));
  }
}

export default LinkedList;
