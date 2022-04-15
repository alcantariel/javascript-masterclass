// Iterables e Iterator - criando um Iterable, implementando a interface

function createIterable(...array) {
  return {
    [Symbol.iterator]() {
      let i = 0;

      return {
        next() {
          if (i < array.length) {
            return {
              value: array[i++],
              done: false,
            };
          }

          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}

const iterator = createIterable("Fortran", "Lisp", "COBOL");

for (let language of iterator) {
  console.log(language);
}
// Fortran
// Lisp
// COBOL

console.log([...iterator]); // [ 'Fortran', 'Lisp', 'COBOL' ]
