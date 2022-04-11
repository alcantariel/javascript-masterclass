// execution context

const v1 = 10;

const fn1 = function () {
  const v1 = 100;

  const fn2 = function () {
    // procura no escopo de fn2, não encontra, sobe para o escopo de fn1
    // procura no escopo de fn1, encontra
    // imprime v1 dentro do escopo de fn1 que é o mais próximo
    console.log(v1);
  };

  fn2();
};

fn1(); // 100
