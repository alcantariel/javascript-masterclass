// execution context - this com arrow function, não injeta o this

const obj1 = {
  p1: 10,
  getP1() {
    const fn1 = () => this.p1;
    return fn1();
  },
};

console.log(obj1.getP1()); // 10

// arrow function não possui this, que não vai redefinir o this de obj1
