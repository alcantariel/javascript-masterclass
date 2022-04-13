// Mutator API - fill

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

languages.fill("JavaScript", 1);
console.log(languages); // [ 'Python', 'JavaScript', 'JavaScript' ]
