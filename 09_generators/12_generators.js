// Generators - throw

function* forever() {
  let value = 1;

  while (true) {
    const reset = yield value++;

    if (reset) {
      value = 1;
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

// fluxo interrompido - não é executado
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());