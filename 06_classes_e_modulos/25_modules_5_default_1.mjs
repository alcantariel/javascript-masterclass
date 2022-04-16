// Modules - export default

import * as math from "./25_modules_1_math.mjs";

export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return math.PI * math.pow(this.radius, 2);
  }
}
