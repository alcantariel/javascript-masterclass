// Mutator API - pop

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

// remove o último elemento e o retorna
const removedElement = languages.pop();

console.log(removedElement); // Java
console.log(languages); // [ 'Python', 'C' ]
