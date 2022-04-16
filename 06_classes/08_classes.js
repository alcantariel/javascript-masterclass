// Classes - static methods

class Square {
  constructor(side) {
    this.side = side;
  }

  // prototype method
  calculateArea() {
    return Math.pow(this.side, 2);
  }

  // prototype method
  toString() {
    return `side: ${this.side}, area: ${this.calculateArea()}`;
  }

  // static method
  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
}

const square = Square.fromArea(16);

console.log(square); // Square { side: 4 }
console.log(square.toString()); // side: 4, area: 16
console.log(square.calculateArea()); // side: 16
