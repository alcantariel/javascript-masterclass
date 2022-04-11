// execution context - this

const obj1 = {
  p1: 10,
  getP1() {
    return this.p1;
  },
};

console.log(obj1.getP1()); // 10
