// WeakSet

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(10);
const circle2 = {
  radius: 5,
};

console.log(circle1); // Circle { radius: 10 }
console.log(circle1.calculateArea()); // 314.1592653589793

console.log(circle1.calculateArea.call(circle2)); // 78.53981633974483
