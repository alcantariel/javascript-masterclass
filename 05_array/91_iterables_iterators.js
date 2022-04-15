// Iterables e Iterators - Symbol.iterator

const languages = ["Fortran", "Lisp", "COBOL"];
const iterator = languages[Symbol.iterator]();

// iterator.next que é invocado pelo spread, for of...
// cada vez que o next é executado, retorna o value e done
console.log(iterator.next()); // { value: 'Fortran', done: false }
