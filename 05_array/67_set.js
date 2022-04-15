// Set - clear

const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");

console.log(charsets); // Set(3) { 'ASCII', 'ISO-8859-1', 'UTF-8' }

charsets.clear();

console.log(charsets); // Set(0) {}
