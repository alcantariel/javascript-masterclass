// Promises

const ONE_SECOND_IN_MS = 1000;

function delayedSum(a, b) {
  // função que será executada após um tempo em milissegundo
  setTimeout(() => {
    return a + b;
  }, ONE_SECOND_IN_MS);
}

const result = delayedSum(2, 2);

console.log(result); // undefined
