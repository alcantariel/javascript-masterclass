// herança - Object.create

const functionalLanguage = { paradigm: "Functional" };

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;

for (let key in scheme) {
  console.log(key, scheme.hasOwnProperty(key));
  // name true
  // year true
  // paradigm false
}

console.log(Object.getPrototypeOf(javascript)); // { paradigm: "Functional" }
