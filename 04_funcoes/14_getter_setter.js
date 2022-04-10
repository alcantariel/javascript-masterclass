// getter e setter

const rectangle = {
  x: 10,
  y: 2,
  get area() {
    return this.x * this.y;
  },
};

console.log(rectangle.area); // 20
