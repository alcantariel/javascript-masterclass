// Object API - is

const javascript = {
  name: "JavaScript",
  year: 1995,
  paradigm: "OO and Functional",
};

const javascript2 = {
  name: "JavaScript",
  year: 1995,
  paradigm: "OO and Functional",
};

console.log(Object.is(javascript, javascript)); // true
console.log(Object.is(javascript, javascript2)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
