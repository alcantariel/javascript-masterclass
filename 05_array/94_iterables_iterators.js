// Iterables e Iterators - Symbol.iterator set

const languages = new Set(["Fortran", "Lisp", "COBOL"]);
const iterator = languages[Symbol.iterator]();

// iterator.next que é invocado pelo spread, for of...
// cada vez que o next é executado, retorna o value e done
console.log(iterator.next()); // { value: 'Fortran', done: false }
console.log(iterator.next()); // { value: 'Lisp', done: false }
console.log(iterator.next()); // { value: 'COBOL', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log(languages.entries());
// [Set Entries] {
//   [ 'Fortran', 'Fortran' ],
//   [ 'Lisp', 'Lisp' ],
//   [ 'COBOL', 'COBOL' ]
// }

console.log(languages.keys()); // [Set Iterator] { 'Fortran', 'Lisp', 'COBOL' }

console.log(languages.values()); // [Set Iterator] { 'Fortran', 'Lisp', 'COBOL' }
