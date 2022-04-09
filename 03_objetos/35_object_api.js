// Object API - defineProperty configurable

const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "JavaScript",
  enumerable: true,
  writable: true,
  configurable: true,
});

delete javascript.name;

console.log(javascript); // {}
console.log(javascript.name); // undefined
