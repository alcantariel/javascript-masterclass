// getter e setter - defineProperty

const rectangle = {};

Object.defineProperty(rectangle, "x", {
  set(x) {
    this._x = x;
  },
});

Object.defineProperty(rectangle, "y", {
  set(y) {
    this._y = y;
  },
});

Object.defineProperty(rectangle, "area", {
  get() {
    return this._x * this._y;
  },
});

rectangle.x = 10;
rectangle.y = 2;

console.log(rectangle.area); // 20
