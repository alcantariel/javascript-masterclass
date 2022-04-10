// funções de primeira classe

const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const calculator = function () {
  return function () {
    return "calculator";
  };
};

console.log(sum(2, 2)); // 4
console.log(subtract(2, 2)); // 0
console.log(calculator); // [Function: calculator]
console.log(calculator()); // [Function]
console.log(calculator()()); // calculator
