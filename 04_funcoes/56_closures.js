// closures

const v1 = 10;

function fn1() {
  console.log(v1);
}

function fn2(fn1) {
  fn1();
}

// fn1 foi criada com v1 valendo 10, como o escopo é estático, logo, v1 = 10
fn2(fn1); // 10
