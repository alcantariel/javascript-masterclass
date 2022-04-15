// Iterables e Iterator - criando um Iterator

function createIterator(...array) {
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
}

const iterator = createIterator("Fortran", "Lisp", "COBOL");
console.log(iterator.next()); // { value: 'Fortran', done: false }
console.log(iterator.next()); // { value: 'Lisp', done: false }
console.log(iterator.next()); // { value: 'Cobol', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
