class Shape {
  get area() {
    return 0;
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  get area() {
    return this.length * this.width;
  }
}
class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  get area() {
    return this.length ** 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  get area() {
    return Math.PI * (this.radius ** 2);
  }
}
const shapes = [
  new Rectangle(1, 2),
  new Square(1, 2),
  new Circle(2),
]
for (let s of shapes) {
  console.log(s.area);
}

/* This principle states that if we have a parent class and a child class, then we can interchange the parent and child class without getting incorrect results.
This means that the child class must implement everything that’s in the parent class. The parent class serves the class has the base members that child classes extend from.
For example, if we want to implement classes for a bunch of shapes, we can have a parent Shape class, which are extended by all classes by implementing everything in the Shape class. */