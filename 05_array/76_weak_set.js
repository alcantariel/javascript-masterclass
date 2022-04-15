// WeakSet

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(10);

console.log(circle1); // Circle { radius: 10 }
console.log(circle1.calculateArea()); // 314.1592653589793
