// execution context

const v1 = 10;

const fn1 = function () {
  const v1 = 100;

  const fn2 = function () {
    const v1 = 1000;
    console.log(v1);
    const v2 = 10000;
    console.log(v2);
  };

  fn2();
};

console.log(v2); // v2 is not defined

// o contexto de execução da função é isolado
// não é possível acessar variáveis dentro da função
// apenas é possível acessar de dentro para fora
