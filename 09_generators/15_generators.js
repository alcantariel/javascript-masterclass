// Generators com Symbol.iterator

function createIterable(...array) {
  return {
    *[Symbol.iterator]() {
      let i = 0;

      while (i < array.length) {
        yield array[i++];
      }
    },
  };
}

const languages = createIterable("Fortran", "Lisp", "COBOL");

for (let language of languages) {
  console.log(language);
}

// Fortran
// Lisp
// COBOL
