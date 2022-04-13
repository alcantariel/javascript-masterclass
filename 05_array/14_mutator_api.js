// Mutator API - splice

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// adicionar na posição 1, retorna um array com os elementos removidos
const removedElements = languages.splice(1, 0, "JavaScript", "C++");

console.log(removedElements); // []
console.log(languages); // [ 'Python', 'JavaScript', 'C++', 'C', 'Java' ]
