// Promises - performance

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

console.time("performance");
sum(2, 2)
  .then(function (a) {
    return sum(4, 4).then(function (b) {
      return sum(a, b).then(function (result) {
        console.log(result);
        console.timeEnd("performance"); // 3.018s
      });
    });
  })
  .catch(function (error) {
    console.log(error); // Invalid input
  });
