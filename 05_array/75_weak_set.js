// WeakSet - delete

const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};

ws1.add(obj1);
ws1.add(obj2);

console.log(ws1); // WeakSet { <items unknown> }
console.log(ws1.has(obj1)); // true
console.log(ws1.has(obj2)); // true

const deleted = ws1.delete(obj1);
console.log(deleted); // true

console.log(ws1); // WeakSet { <items unknown> }
console.log(ws1.has(obj1)); // false
console.log(ws1.has(obj2)); // true
