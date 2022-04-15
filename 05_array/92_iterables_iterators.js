// Iterables e Iterators - Symbol.iterator array

const languages = ["Fortran", "Lisp", "COBOL"];
const iterator = languages[Symbol.iterator]();

// iterator.next que é invocado pelo spread, for of...
// cada vez que o next é executado, retorna o value e done
console.log(iterator.next()); // { value: 'Fortran', done: false }
console.log(iterator.next()); // { value: 'Lisp', done: false }
console.log(iterator.next()); // { value: 'Cobol', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
