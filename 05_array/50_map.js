// Map - map vs object

const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

console.log(obj[10]); // String
console.log(obj["10"]); // String
console.log(obj[true]); // String
console.log(obj["true"]); // String
console.log(obj); // { '10': 'String', true: 'String' }
