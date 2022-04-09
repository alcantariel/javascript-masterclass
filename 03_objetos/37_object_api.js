// Object API - seal

const javascript = { name: "JavaScript" };

console.log(Object.isSealed(javascript)); // false
Object.seal(javascript);
console.log(Object.isSealed(javascript)); // true

javascript.name = "ECMAScript";
console.log(javascript); // { name: 'ECMAScript' }

javascript.year = 1995;
console.log(javascript); // { name: 'ECMAScript' }

delete javascript.name;
console.log(javascript); // { name: 'ECMAScript' }
