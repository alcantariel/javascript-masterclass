// execution context

const v1 = 10;

const fn1 = function () {
  const fn2 = function () {
    // procura no escopo de fn2, não encontra, sobe para o escopo de fn1
    // procura no escopo de fn1, não encontra, sobe para o escopo global
    // imprime v1
    console.log(v1);
  };

  fn2();
};

fn1(); // 10
