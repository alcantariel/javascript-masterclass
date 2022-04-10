// this

const rectangle = {
  x: 10,
  y: 2,
  calculateArea() {
    return this.x * this.y;
  },
};

console.log(rectangle); // { x: 10, y: 2, calculateArea: [Function: calculateArea] }
console.log(rectangle.calculateArea()); // 20

// rectangle assume o papel de this
