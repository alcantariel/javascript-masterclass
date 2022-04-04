// Symbol

let regexp = /JavaScript/;
regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp)); // true
