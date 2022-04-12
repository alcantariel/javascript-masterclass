// closures

const obj1 = {};

for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function (v2) {
    return function () {
      console.log(v2);
    };
  })(v1);
}

console.log(obj1); // { 0: [Function], 1: [Function], 2: [Fucntion] }
console.log(obj1[0]()); // 0
console.log(obj1[1]()); // 1
console.log(obj1[2]()); // 2

// o escopo de v1 é compartilhado
// porém, ao criar uma função auto invocável
// um outro escopo é criado
// e por meio da closure, v1 é passada para essa função no decorrer do laço (0, 1 e 2)
// como o escopo da função é estático e definido no momento da criação da função
// os valores do laço (0, 1 e 2)
// acabam sendo criados e mantidos na função interna

// closure de (encarceiramento, fechamento)
