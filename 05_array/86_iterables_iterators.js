// Iterables e Iterators - Map spread operator

const languages = new Map([
  ["Fortran", 1957],
  ["Lisp", 1958],
  ["COBOL", 1959],
]);

console.log([...languages]); // [ [ 'Fortran', 1957 ], [ 'Lisp', 1958 ], [ 'COBOL', 1959 ] ]
console.log(Array.from(languages)); // [ [ 'Fortran', 1957 ], [ 'Lisp', 1958 ], [ 'COBOL', 1959 ] ]
