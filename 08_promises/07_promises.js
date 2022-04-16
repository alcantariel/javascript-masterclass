// Promises - promise hell

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

sum()
  .then(function (a) {
    sum()
      .then(function (b) {
        sum()
          .then(function (result) {
            console.log(result);
          })
          .catch(function (error) {
            console.log(error); // Invalid input
          });
      })
      .catch(function (error) {
        console.log(error); // Invalid input
      });
  })
  .catch(function (error) {
    console.log(error); // Invalid input
  });
