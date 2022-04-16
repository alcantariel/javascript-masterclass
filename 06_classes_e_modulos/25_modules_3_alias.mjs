// Modules - alias

import { PI as pi, pow } from "./25_modules_1_math.mjs";

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return pi * pow(this.radius, 2);
  }
}

const circle = new Circle(10);
console.log(circle); // Circle { radius: 10 }
console.log(circle.area); // 314.1592
