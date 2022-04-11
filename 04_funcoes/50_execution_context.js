// execution context - this

const obj1 = {
  p1: 10,
  getP1() {
    const fn1 = function () {
      return this.p1;
    };

    return fn1();
  },
};

console.log(obj1.getP1()); // undefined

// this não é mais obj1 quando fn1 encapsula o retorno de this.p1
// fn1 não foi invocada por meio de nenhum objeto
