// execution context

const v1 = 10;

const fn1 = function () {
  // procura v1 dentro do escopo da função
  // se não encontrar, sobe para o escopo acima e procura v1 (escopo global)
  // se encontrar, imprime, caso contrário, procura acima
  // se não encontrar no último nível, imprimirá undefined
  console.log(v1);
};

fn1(); // 10
