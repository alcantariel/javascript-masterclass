// Classes - extends

class Shape {}

// Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// super() deve ser invocado, que é o construtor da super classe

class Circle extends Shape {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  toString() {
    return `radius: ${this.radius}, area: ${this.calculateArea()}`;
  }

  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }
}

class Square extends Shape {
  constructor(side) {
    this.side = side;
  }

  calculateArea() {
    return Math.pow(this.side, 2);
  }

  toString() {
    return `side: ${this.side}, area: ${this.calculateArea()}`;
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

const circle = Circle.fromArea(314.1592653589793);
console.log(circle.toString()); // radius: 10, area: 314.1592653589793

const square = Square.fromArea(16);
console.log(square.toString()); // side: 4, area: 16
