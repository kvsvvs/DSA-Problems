class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // Start with an empty list
    this.tail = null; // Keep track of the tail for efficient appending
  }

  // Method to append a new node at the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, set head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the new node to the tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode; // Update the tail to the new node
    }
  }

  // Method to prepend a new node at the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, set head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the new node to the head
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode; // Update the head to the new node
    }
  }

  // Method to delete a node with a given value
  delete(value) {
    if (!this.head) {
      return; // List is empty
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        // Node to be deleted is found
        if (current.prev) {
          current.prev.next = current.next; // Link previous node to the next node
        } else {
          this.head = current.next; // Node is the head
        }
        if (current.next) {
          current.next.prev = current.prev; // Link next node to the previous node
        } else {
          this.tail = current.prev; // Node is the tail
        }
        return;
      }
      current = current.next;
    }
  }

  // Method to print all nodes in the list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Method to delete the head node
  deleteHead() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (this.head === this.tail) {
      // If there's only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  // Method to delete the last node
  deleteTail() {
    if (!this.tail) {
      console.log("List is empty");
      return;
    }
    if (this.head === this.tail) {
      // If there's only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverse() {
    let current = this.head;
    let temp = null;

    // Swap next and prev for all nodes
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to the next node (which is the previous node before swap)
    }

    // Swap head and tail
    if (temp) {
      this.head = temp.prev;
    }
  }
}

export default DoublyLinkedList;
