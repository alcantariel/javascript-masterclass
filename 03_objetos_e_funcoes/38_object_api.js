// Object API - freeze

const javascript = { name: "JavaScript" };

console.log(Object.isFrozen(javascript)); // false
Object.freeze(javascript);
console.log(Object.isFrozen(javascript)); // true

javascript.name = "ECMAScript";
console.log(javascript); // { name: 'JavaScript' }

javascript.year = 1995;
console.log(javascript); // { name: 'JavaScript' }

delete javascript.name;
console.log(javascript); // { name: 'JavaScript' }
