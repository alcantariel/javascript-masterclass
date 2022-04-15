// Set - delete

const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");

console.log(charsets); // Set(3) { 'ASCII', 'ISO-8859-1', 'UTF-8' }
console.log(charsets.has("UTF-8")); // true

const deleted = charsets.delete("UTF-8");
console.log(deleted); // true

console.log(charsets); // Set(3) { 'ASCII', 'ISO-8859-1' }
console.log(charsets.has("UTF-8")); // false

const invalidDelete = charsets.delete("UTF-8");
console.log(invalidDelete); // false
