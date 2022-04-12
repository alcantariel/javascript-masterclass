// closures

function fn1() {
  const v1 = 10;
  return function () {
    console.log(v1);
  };
}

const fn2 = fn1();

const v1 = 100;

// v1 é definido no momento da criação da função, logo, v1 = 10
fn2(); // 10
