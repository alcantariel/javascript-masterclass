// Set - has

const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");

console.log(charsets.has("ASCII")); // true
console.log(charsets.has("CP-1252")); // false
