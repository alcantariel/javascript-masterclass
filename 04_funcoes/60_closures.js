// closures

const obj1 = {};

for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = function () {
    console.log(this.v2);
  }.bind({ v2: v1 });
}

console.log(obj1); // { 0: [Function], 1: [Function], 2: [Fucntion] }
console.log(obj1[0]()); // 0
console.log(obj1[1]()); // 1
console.log(obj1[2]()); // 2

// utilizando o bind para definir o this de uma função
// o bind é acoplado a um objeto que possui uma propriedade v2 com o valor de v1
// logo, este objeto com a propriedade v2 está no this da função interna
