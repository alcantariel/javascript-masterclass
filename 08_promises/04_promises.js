// Promises - callback hell

const ONE_SECOND_IN_MS = 1000;

function delayedSum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, ONE_SECOND_IN_MS);
}

// demorou 3 segundos para executar
// além disso
// o código vai ficando cada vez mais difícil
// de ler e dar manutenção
// e as promises vieram para modelar isso

delayedSum(2, 2, function (a) {
  console.log(a); // 4

  delayedSum(4, 4, function (b) {
    console.log(b); // 8

    delayedSum(a, b, function (result) {
      console.log(result); // 12
    });
  });
});
