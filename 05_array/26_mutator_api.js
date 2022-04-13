// Mutator API - fill

const languages = ["Python", "C", "Java"];
console.log(languages); // [ 'Python', 'C', 'Java' ]

languages.fill("JavaScript", 0, 2);
console.log(languages); // [ 'JavaScript', 'JavaScript', 'Java' ]
