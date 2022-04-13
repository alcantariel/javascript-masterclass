// Mutator API - unshift

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// adiciona no início e retorna o novo length
const newLength = languages.unshift("JavaScript");

console.log(newLength); // 4
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'Java' ]
