// Generators - iterator

function* forever() {
  let value = 1;

  while (true) {
    yield value++;
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
today(); // imprime today
console.log(foreverGenerator.next()); // { value: 4, done: false }
console.log(foreverGenerator.next()); // { value: 5, done: false }
