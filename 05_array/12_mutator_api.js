// Mutator API - shift

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// remove o primeiro elemento e o retorna
const removedElement = languages.shift();

console.log(removedElement); // Python
console.log(languages); // [ 'C', 'Java' ]
