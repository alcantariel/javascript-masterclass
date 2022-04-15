// WeakSet

const circles = new WeakSet();

function Circle(radius) {
  circles.add(this);
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  if (!circles.has(this)) {
    throw "Invalid Object";
  }

  return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(10);
const circle2 = {
  radius: 5,
};

console.log(circle1); // Circle { radius: 10 }
console.log(circle1.calculateArea()); // 314.1592653589793

console.log(circle1.calculateArea.call(circle2)); // "Invalid Object"

// e para não ter preocupação de limpar o set de circles
// quando circle1 perder sua referência
// eles se tornam elegíveis para o garbage collection
circle1 = null;
