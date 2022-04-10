// funções de primeira classe

const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const calculator = function (fn) {
  return function (a, b) {
    return fn(a, b);
  };
};

console.log(calculator(sum)(2, 2)); // 4
console.log(calculator(subtract)(2, 2)); // 0
