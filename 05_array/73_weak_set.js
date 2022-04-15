// WeakSet - add

const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};

ws1.add(obj1);
ws1.add(obj2);

console.log(ws1); // WeakSet { <items unknown> }
