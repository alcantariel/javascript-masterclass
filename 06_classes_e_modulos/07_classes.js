// Classes - prototype methods

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
}

const square = new Square(4);

console.log(square); // Square { side: 4 }
console.log(square.toString()); // side: 4, area: 16
console.log(square.calculateArea()); // side: 16
