// Promises - catch

const ONE_SECOND_IN_MS = 1000;

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) {
      return reject("Invalid input");
    }

    setTimeout(() => {
      resolve(a + b);
    }, ONE_SECOND_IN_MS);
  });
}

sum(2, 2).then(function (a) {
  sum(4, 4).then(function (b) {
    sum()
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error); // Invalid input
      });
  });
});
