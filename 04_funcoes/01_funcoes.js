// funções

// function declaration
function sum(a, b) {
  return a + b;
}

// function expression
const sum2 = function (a, b) {
  return a + b;
};

console.log(sum); // [Function: sum]
console.log(sum2); // [Function: sum2]

console.log(sum(1, 2)); // 3
console.log(sum2(2, 2)); // 4
