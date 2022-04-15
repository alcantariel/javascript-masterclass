// Iterables e Iterators - Map for of

const languages = new Map([
  ["Fortran", 1957],
  ["Lisp", 1958],
  ["COBOL", 1959],
]);

for (let language of languages) {
  console.log(language);
}

// [ 'Fortran', 1957 ]
// [ 'Lisp', 1958 ]
// [ 'COBOL', 1959 ]
