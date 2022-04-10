// this

const calculateArea = function () {
  return this.x * this.y;
};

const rectangle = {
  x: 10,
  y: 2,
  calculateArea,
};

console.log(calculateArea()); // NaN
console.log(rectangle.calculateArea()); // 20

// rectangle assume o papel de this
