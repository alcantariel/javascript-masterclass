// Object API - defineProperty enumerable

const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "JavaScript",
  enumerable: true,
});

console.log(javascript); // { name: 'JavaScript' }
console.log(javascript.name); // JavaScript
