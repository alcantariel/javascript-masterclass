// Classes - classe para função construtora

// constructor function
function Square(side) {
  this.side = side;
}

// prototype methods
Square.prototype.toString = function () {
  return `side ${this.side}, area: ${this.calculateArea()}`;
};

Square.prototype.calculateArea = function () {
  return Math.pow(this.side, 2);
};

// static methods
Square.fromArea = function (area) {
  return new Square(Math.sqrt(area));
};

const square = new Square(4);
const squareFromArea = Square.fromArea(16);

console.log(square); // Square { side: 4 }
console.log(square.toString()); // side: 4, area: 16
console.log(square.calculateArea()); // side: 16

console.log(squareFromArea); // squareFromArea { side: 4 }
console.log(squareFromArea.toString()); // side: 4, area: 16
console.log(squareFromArea.calculateArea()); // side: 16
