// Map - map vs object

const obj = {};
console.log("toString" in obj); // true
console.log("valueOf" in obj); // true

const obj2 = {};
console.log("toString" in obj2); // false
console.log("valueOf" in obj2); // false

const map = new Map();
console.log(map.get("toString")); // undefined
console.log(map.get("valueOf")); // valueOf
