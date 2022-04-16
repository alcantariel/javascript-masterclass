// Promises - callback

const ONE_SECOND_IN_MS = 1000;

function delayedSum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, ONE_SECOND_IN_MS);
}

delayedSum(2, 2, function (result) {
  console.log(result); // 4
});
