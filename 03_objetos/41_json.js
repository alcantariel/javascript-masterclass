// JSON.parse

console.log(JSON.parse("10"));
10;
console.log(JSON.parse('"JavaScript"'));
("JavaScript");
console.log(JSON.parse("true")); // true
console.log(JSON.parse("false")); // false
console.log(JSON.parse('{"name": "Self", "paradigm": "OO"}')); // { name: "Self", paradigm: "OO" }
console.log(JSON.parse("[1,2,3,4,5]")); // [ 1, 2, 3, 4, 5 ]
console.log(JSON.parse("null")); // null
