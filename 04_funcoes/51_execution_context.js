// execution context - this

const obj1 = {
  p1: 10,
  getP1() {
    const that = this;

    const fn1 = function () {
      return that.p1;
    };

    return fn1();
  },
};

console.log(obj1.getP1()); // 10

// obj1 vai ter sua referência passada para that, que conhece p1
