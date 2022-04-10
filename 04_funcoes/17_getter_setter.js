// getter e setter

const rectangle = {
  set x(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log("Invalid value for x");
    }
  },
  set y(y) {
    if (y > 0) {
      this._y = y;
    } else {
      console.log("Invalid value for y");
    }
  },
  get area() {
    return this._x * this._y;
  },
};

rectangle.x = -10; // Invalid value for x
rectangle.y = -2; // Invalid value for y
console.log(rectangle.area); // NaN

rectangle.x = 10;
rectangle.y = 2;
console.log(rectangle.area); // 20
