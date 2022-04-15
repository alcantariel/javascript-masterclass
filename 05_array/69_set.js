// Set - eliminar duplicação de um array

let array = [10, 10, 10];
console.log(array); // [ 10, 10, 10 ]
console.log(array.length); // 3

const set = new Set(array);
console.log(set); // Set(1) { 10 }
console.log(set.size); // 1

array = Array.from(set);
console.log(array); // [ 10 ]
console.log(array.length); // 1
