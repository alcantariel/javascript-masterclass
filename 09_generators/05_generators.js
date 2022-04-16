// Generators - yield

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

// controlando fluxo de execução por meio do generator
const foreverGenerator = forever();
foreverGenerator.next(); // 1
foreverGenerator.next(); // 2
foreverGenerator.next(); // 3
today(); // imprime today
foreverGenerator.next(); // 4
foreverGenerator.next(); // 5
