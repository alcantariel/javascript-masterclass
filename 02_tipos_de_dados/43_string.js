// String API

console.log("C++".match(/\+/g)); // ['+', '+']
console.log("C++".match(/\+/)); // [ '+', index: 1, input: 'C++', groups: undefined ] - encontra o index
console.log("Java".search("a")); // 1 - similar ao indexOf
console.log("JavaScript".replace("Java", "Ecma")); // EcmaScript
console.log("JavaScript".replace(/a/g, 4)); // J4v4Script
