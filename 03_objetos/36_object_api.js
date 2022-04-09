// Object API - preventExtensions

const javascript = { name: "JavaScript" };

console.log(Object.isExtensible(javascript)); // true
Object.preventExtensions(javascript);
console.log(Object.isExtensible(javascript)); // false

javascript.name = "ECMAScript";
console.log(javascript); // { name: 'ECMAScript' }

javascript.year = 1995;
console.log(javascript); // { name: 'ECMAScript' }

delete javascript.name;
console.log(javascript); // {}
