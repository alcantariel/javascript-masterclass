// String API

// se for menor -1
// se for igual 0
// se for maior 1

console.log("C++".localeCompare("Ruby")); // -1
console.log("JavaScript".localeCompare("JavaScript")); // 0
console.log("JavaScript".localeCompare("Dart")); // 1

// com acentuação

console.log("a" < "b"); // true
console.log("á" < "b"); // false

console.log("a".charCodeAt(0)); // 97
console.log("b".charCodeAt(0)); // 98
console.log("á".charCodeAt(0)); // 225

console.log("a".localeCompare("b")); // -1
console.log("á".localeCompare("b")); // -1
