// Map - map vs object

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10)); // Number
console.log(map.get("10")); // String
console.log(map.get(true)); // Boolean
console.log(map.get("true")); // String
console.log(map);

// Map(4) {
//   10 => 'Number',
//   '10' => 'String',
//   true => 'Boolean',
//   'true' => 'String'
// }
