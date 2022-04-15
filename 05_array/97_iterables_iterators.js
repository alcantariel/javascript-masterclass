// Iterables e Iterator - criando um Iterator

function createIterable(...array) {
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

const iterator = createIterable("Fortran", "Lisp", "COBOL");

for (let language of iterator) {
  console.log(language); // iterator is not iterable
}

console.log([...iterator]); // // iterator is not iterable

// não possui a propriedade Symbol.iterator
// não implementa a interface Symbol.iterator
