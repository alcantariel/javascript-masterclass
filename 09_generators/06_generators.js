// Generators - iterator

function* forever() {
  let value = 1;

  while (true) {
    console.log(value++);
    yield;
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next()); // 1
// { value: undefined, done: false }

console.log(foreverGenerator.next()); // 2
// { value: undefined, done: false }

console.log(foreverGenerator.next()); // 3
// { value: undefined, done: false }

today(); // imprime today

console.log(foreverGenerator.next()); // 4
// { value: undefined, done: false }

console.log(foreverGenerator.next()); // 5
// { value: undefined, done: false }
