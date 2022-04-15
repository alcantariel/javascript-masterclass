// WeakMap - get

const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

console.log(wm1); // WeakMap { <items unknown> }
console.log(wm1.get(obj1)); // obj1
console.log(wm1.get(obj2)); // obj2
