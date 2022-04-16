// Generators - throw com try/catch

function* forever() {
  let value = 1;

  while (true) {
    try {
      const reset = yield value++;

      if (reset) {
        value = 1;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next()); // { value: 1, done: false }
console.log(foreverGenerator.next()); // { value: 2, done: false }
console.log(foreverGenerator.next()); // { value: 3, done: false }
console.log(foreverGenerator.throw("error")); // error
// { value: 4, done: false }

// como a exceção foi tratada, ele segue o fluxo de execução
console.log(foreverGenerator.next(true)); // { value: 1, done: false }
console.log(foreverGenerator.next()); // { value: 2, done: false }
