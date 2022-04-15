// Iterables e Iterators - spread operator (distribuir, espalhar)

const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"];

const languages = [...classicLanguages, ...modernLanguages];

console.log(classicLanguages); // [ "Fortran", "Lisp", "COBOL" ]
console.log(modernLanguages); // [ "Python", "Ruby", "JavaScript" ];
console.log(languages); // ["Fortran", "Lisp", "COBOL", "Python", "Ruby", "JavaScript"];

// o spread também é baseado na implementação de iterables e iterators
