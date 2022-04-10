// getter e setter

const rectangle = {
  set x(x) {
    this.x = x;
  },
  set y(y) {
    this.y = y;
  },
  get area() {
    return this.x * this.y;
  },
};

rectangle.x = 10;
rectangle.y = 2;

// maximum call stack size exceeded
