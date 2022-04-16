// Generators

// transformando forever em um generator com o * ao lado do function
function* forever() {
  let value = 1;

  while (true) {
    console.log(value++);
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

// como agora forever é um generator
// ao executar a função
// a execução da função fará a criação do generator dela
forever();
today(); // imprime today
