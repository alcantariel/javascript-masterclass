// Object API - defineProperty writable

const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "JavaScript",
  enumerable: true,
});

// não sobrescreve devido ao writable = false
javascript.name = "ECMAScript";

console.log(javascript); // { name: 'JavaScript' }
console.log(javascript.name); // JavaScript
