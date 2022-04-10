// function expression

console.log(sum(2, 2)); // ReferenceError: Cannot access 'sum' before initialization

const sum = function (a, b) {
  return a + b;
};
