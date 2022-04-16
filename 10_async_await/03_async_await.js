// Async/Await - iterando com async/await com forEach

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) {
      return reject("Invalid input");
    }

    setTimeout(() => resolve(a + b), 1000);
  });
}

(async function () {
  try {
    const functions = [sum(2, 2), sum(4, 4)];
    const results = [];

    // é um comportamento específico do forEach
    // ele imprime os valores corretamente
    // mas o forEach não está esperando o resultado das funções internamente
    // tanto que o Invalid input é logado muito antes do que os resultados
    // porque o fluxo segue, mesmo com o async/await dentro do forEach
    // então ao obter [a, b] de results, os valores ainda não estão prontos
    // caindo no tratamento de exceção
    functions.forEach(async (fn) => {
      const result = await fn;
      console.log(result); // 4, 8
      results.push(result);
    });

    const [a, b] = results;
    const result = await sum(a, b);
    console.log(result);
  } catch (error) {
    console.log(error); // Invalid Input
  }
})();
