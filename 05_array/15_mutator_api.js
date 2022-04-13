// Mutator API - splice

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// substituir elementos, retorna um array com os elementos removidos
const removedElements = languages.splice(1, 1, "JavaScript");

console.log(removedElements); // [ 'C' ]
console.log(languages); // [ 'Python', 'JavaScript', 'Java' ]
