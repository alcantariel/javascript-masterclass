// Promises - Promise.race

const ONE_SECOND_IN_MS = 1000;

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (!a || !b) {
      return reject("Invalid input");
    }

    setTimeout(() => {
      resolve(a + b);
    }, Math.random() * ONE_SECOND_IN_MS);
  });
}

console.time("performance");
Promise.race([sum(2, 2), sum(4, 4)])
  .then(function (value) {
    console.log(value);

    return sum(value, value).then(function (result) {
      console.log(result);
      console.timeEnd("performance"); // 654.344ms
    });
  })
  .catch(function (error) {
    console.log(error);
  });
