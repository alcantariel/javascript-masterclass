// herança - com/sem protótipo object

const objectWithDefaultPrototype = {};
console.log(objectWithDefaultPrototype.toString); // [Function: toString]
console.log(objectWithDefaultPrototype.hasOwnProperty); // [Function: hasOwnProperty]

const objectWithoutPrototype = Object.create(null);
console.log(objectWithoutPrototype.toString); // undefined
console.log(objectWithoutPrototype.hasOwnProperty); // undefined
