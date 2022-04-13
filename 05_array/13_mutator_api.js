// Mutator API - splice

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// remove na posição 1, retorna um array com os elementos removidos
const removedElements = languages.splice(1, 1);

console.log(removedElements); // [ 'C' ]
console.log(languages); // [ 'Python', 'Java' ]
