// closures

const v1 = 10;

function fn1() {
  function fn2() {
    // scope chain busca o v1 da função externa
    console.log(v1);
  }

  fn2();
}

fn1(); // 10
