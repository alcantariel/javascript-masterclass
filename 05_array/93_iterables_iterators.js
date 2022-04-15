// Iterables e Iterators - Symbol.iterator map

const languages = new Map([
  ["Fortran", 1957],
  ["Lisp", 1958],
  ["COBOL", 1959],
]);
const iterator = languages[Symbol.iterator]();

// iterator.next que é invocado pelo spread, for of...
// cada vez que o next é executado, retorna o value e done
console.log(iterator.next()); // { value: [ 'Fortran', 1957 ], done: false }
console.log(iterator.next()); // { value: [ 'Lisp', 1958 ], done: false }
console.log(iterator.next()); // { value: { value: [ 'COBOL', 1959 ], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log(languages.entries());
// [Map Entries] {
//   [ 'Fortran', 1957 ],
//   [ 'Lisp', 1958 ],
//   [ 'COBOL', 1959 ]
// }

console.log(languages.keys()); // [Map Iterator] { 'Fortran', 'Lisp', 'COBOL' }

console.log(languages.values()); // [Map Iterator] { 1957, 1958, 1959 }
