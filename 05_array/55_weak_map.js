// WeakMap - has

const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

// não exibe as chaves e valores por não ser iterável
console.log(wm1); // WeakMap { <items unknown> }
console.log(wm1.has(obj1)); // true
console.log(wm1.has(obj2)); // true
