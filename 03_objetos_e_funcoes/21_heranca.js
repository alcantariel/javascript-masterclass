// herança - Object.setPrototypeOf e Object.getPrototypeOf

const functionalLanguage = { paradigm: "Functional" };
const scheme = { name: "Scheme", year: 1975 };
const javascript = { name: "JavaScript", year: 1995 };

Object.setPrototypeOf(scheme, functionalLanguage);
Object.setPrototypeOf(javascript, functionalLanguage);

for (let key in scheme) {
  console.log(key, scheme.hasOwnProperty(key));
  // name true
  // year true
  // paradigm false
}

console.log(Object.getPrototypeOf(javascript)); // { paradigm: "Functional" }
