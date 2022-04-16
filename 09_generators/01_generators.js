// Generators

function forever() {
  let value = 1;

  while (true) {
    console.log(value++);
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

// como a função forever é infinita
// forever nunca vai desalocar espaço no event loop
// para a execução da função today
// logo, today nunca será executada
forever();
today();
