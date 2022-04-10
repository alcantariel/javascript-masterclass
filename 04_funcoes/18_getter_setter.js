// getter e setter - defineProperty

const rectangle = {};

Object.defineProperty(rectangle, "area", {
  get() {
    return this.x * this.y;
  },
});

rectangle.x = 10;
rectangle.y = 2;

console.log(rectangle.area); // 20
