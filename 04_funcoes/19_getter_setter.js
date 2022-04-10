// getter e setter - defineProperty

const rectangle = {};

Object.defineProperty(rectangle, "x", {
  set(x) {
    this.x = x;
  },
});

Object.defineProperty(rectangle, "y", {
  set(y) {
    this.y = y;
  },
});

Object.defineProperty(rectangle, "area", {
  get() {
    return this.x * this.y;
  },
});

rectangle.x = 10;
rectangle.y = 2;

// Maximum call stack size exceeded
