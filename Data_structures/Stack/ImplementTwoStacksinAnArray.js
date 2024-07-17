class TwoStacks {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1;
    this.top2 = size;
  }
  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.arr[++this.top1] = value;
    } else {
      throw new Error("Stack1 Overflow");
    }
  }
  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.arr[--this.top2] = value;
    } else {
      throw new Error("Stack2 Overflow");
    }
  }
  pop1() {
    if (this.top1 >= 0) {
      return this.arr[this.top1--];
    } else {
      throw new Error("Stack1 Underflow");
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      return this.arr[this.top2++];
    } else {
      throw new Error("Stack2 Underflow");
    }
  }

  isEmpty1() {
    return this.top1 === -1;
  }

  isEmpty2() {
    return this.top2 === this.size;
  }

  isFull() {
    return this.top1 + 1 === this.top2;
  }
}

const stacks = new TwoStacks(10);
stacks.push1(1);
stacks.push1(2);
stacks.push2(10);
stacks.push2(20);

console.log(stacks.pop1()); // Outputs 2
console.log(stacks.pop2()); // Outputs 20
