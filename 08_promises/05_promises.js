// Promises - then

const ONE_SECOND_IN_MS = 1000;

function sum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, ONE_SECOND_IN_MS);
  });
}

sum(2, 2).then(function (a) {
  console.log(a);

  sum(4, 4).then(function (b) {
    console.log(b); // 8

    sum(a, b).then(function (result) {
      console.log(result); // 12
    });
  });
});
