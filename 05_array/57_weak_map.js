// WeakMap - delete

const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

console.log(wm1); // WeakMap { <items unknown> }
console.log(wm1.has(obj1)); // true
console.log(wm1.has(obj2)); // true

const deleted = wm1.delete(obj1);
console.log(deleted); // true

console.log(wm1.has(obj1)); // false
console.log(wm1.has(obj2)); // true

const invalidDelete = wm1.delete(obj1);
console.log(invalidDelete); // false
