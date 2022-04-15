// Set - duplicação

const array = [];
array.push(10);
array.push(10);
array.push(10);

console.log(array); // [ 10, 10, 10 ]
console.log(array.length); // 3

const set = new Set();
set.add(10);
set.add(10);
set.add(10);

console.log(set); // Set(1) { 10 }
console.log(set.size); // 1
