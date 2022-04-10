// funções com valores padrão

const sum = function (a = 1, b = 1) {
  return a + b;
};

console.log(sum(2, 2)); // 4
console.log(sum(5)); // 6
console.log(sum()); // 2
