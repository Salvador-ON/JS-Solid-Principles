class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  get area() {
    return this.length * this.width;
  }

  get perimeter() {
    return this.length * 2 + this.width * 2;
  }
}

/* The open/closed principle states that a piece of software is open for extension but closed for modification.
This means that we should be able to add more functionality without changing existing code. */