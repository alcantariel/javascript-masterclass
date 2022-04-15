// Iterables e Iterators - Set for of

const languages = new Set(["Fortran", "Lisp", "COBOL"]);
console.log(languages); // Set(3) { 'Fortran', 'Lisp', 'COBOL' }

for (let language of languages) {
  console.log(language);
}

// Fortran
// Lisp
// COBOL
