// funções com mais/menos parâmetros

const sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 2)); // 4
console.log(sum(5)); // NaN - 5 + undefined
console.log(sum(1, 2, 3)); // 3 - último parâmetro é ignorado
