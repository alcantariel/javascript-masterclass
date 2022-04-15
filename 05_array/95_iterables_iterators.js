// Iterables e Iterators - Symbol.iterator string

const languages = "COBOL";
const iterator = languages[Symbol.iterator]();

// iterator.next que é invocado pelo spread, for of...
// cada vez que o next é executado, retorna o value e done
console.log(iterator.next()); // // { value: 'C', done: false }
console.log(iterator.next()); // // { value: 'O', done: false }
console.log(iterator.next()); // // { value: 'B', done: false }
console.log(iterator.next()); // // { value: 'O', done: false }
console.log(iterator.next()); // // { value: 'L', done: false }
console.log(iterator.next()); // // { value: undefined, done: true }
