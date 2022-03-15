// object

function sum(a, b) {
  return a + b;
}

console.log(typeof sum); // 'function'
console.log(typeof { name: "Linus Torvald" }); // 'object'
console.log(typeof [1, 2, 3, 4]); // 'object'
console.log(typeof /[a-zA-Z_$]/); // 'object'
console.log(typeof new Date()); // 'object'
