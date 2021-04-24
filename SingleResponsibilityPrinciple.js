class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  get area() {
    return this.length * this.width;
  }

}

/* The single responsibility principle says that each of our classes has to be only used for one purpose.
We need this so that we don’t have to change code as often when something changes. It’s also hard to understand what the class is doing if it’s doing many things.
Unrelated concepts in the same class also make comprehending the purpose of the code harder.
*/