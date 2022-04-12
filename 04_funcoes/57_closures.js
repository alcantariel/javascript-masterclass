// closures

function fn1() {
  let v1 = 10;

  return {
    m1() {
      console.log(++v1);
    },
    m2() {
      console.log(--v1);
    },
  };
}

// referência de v1 é compartilhada entre os métodos m1 e m2

const obj1 = fn1();
obj1.m1(); // 11
obj1.m2(); // 10
