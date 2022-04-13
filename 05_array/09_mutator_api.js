// Mutator API - push

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// adiciona no final e retorna o novo length
const newLength = languages.push("JavaScript");

console.log(newLength); // 4
console.log(languages); // [ 'Python', 'C', 'Java', 'JavaScript' ]
