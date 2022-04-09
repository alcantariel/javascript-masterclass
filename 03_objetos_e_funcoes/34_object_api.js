// Object API - defineProperty configurable

const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "JavaScript",
  enumerable: true,
  writable: true,
});

// não apaga devido ao configurable = false
delete javascript.name;

console.log(javascript); // { name: 'JavaScript' }
console.log(javascript.name); // JavaScript
