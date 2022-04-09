// Object API - defineProperty writable

const javascript = {};
Object.defineProperty(javascript, "name", {
  value: "JavaScript",
  enumerable: true,
  writable: true,
});

javascript.name = "ECMAScript";

console.log(javascript); // { name: 'ECMAScript' }
console.log(javascript.name); // ECMAScript
