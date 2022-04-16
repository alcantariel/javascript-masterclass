// Generators - passando parâmetros para o generator por meio de next

function* forever() {
  let value = 1;

  while (true) {
    const reset = yield value++;
    console.log(reset);
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next()); // { value: 1, done: false }
// undefined

console.log(foreverGenerator.next()); // { value: 2, done: false }
// undefined

console.log(foreverGenerator.next()); // { value: 3, done: false }
// undefined

console.log(foreverGenerator.next(true)); // { value: 4, done: false }
// true - retorno do yield

console.log(foreverGenerator.next()); // { value: 5, done: false }
// undefined
