// Boolean - operadores lógicos

function generateSerial(max) {
  return Math.floor(Math.random() * max);
}

console.log(generateSerial(1000)); // random até 1000
console.log(generateSerial(100)); // random até 100
console.log(generateSerial(10)); // random até 10
console.log(generateSerial()); // NaN
