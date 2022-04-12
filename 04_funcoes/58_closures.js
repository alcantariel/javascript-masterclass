// closures

const obj1 = {};

for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = function () {
    console.log(v1);
  };
}

console.log(obj1); // { 0: [Function], 1: [Function], 2: [Fucntion] }
console.log(obj1[0]()); // 3
console.log(obj1[1]()); // 3
console.log(obj1[2]()); // 3

// o escopo de v1 é compartilhado
// v1 é incrementado no laço de repetição enquanto menor que 3
// a verificação v1 < 3 acontece logo após o pós incremento v1++
// logo, v1 incrementa, porém é menor que 3, então ele sai do laço valendo 3
// o que justifica os logs de v1 = 3
