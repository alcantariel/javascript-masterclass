// Classes - extends

class Shape {
  toString() {
    return `area: ${this.calculateArea()}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  toString() {
    return `radius: ${this.radius}, ${super.toString()}`;
  }

  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return Math.pow(this.side, 2);
  }

  toString() {
    return `side: ${this.side}, ${super.toString()}`;
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

const circle = Circle.fromArea(314.1592653589793);
console.log(circle.toString()); // radius: 10, area: 314.1592653589793

const square = Square.fromArea(16);
console.log(square.toString()); // side: 4, area: 16
