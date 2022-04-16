// Promises - Promise.all

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
Promise.all([sum(2, 2), sum(4, 4)])
  .then(function (values) {
    console.log(values); // [ 4, 8 ]
    const [a, b] = values;

    return sum(a, b).then(function (result) {
      console.log(result); // 12
      console.timeEnd("performance"); // 2.011s
    });
  })
  .catch(function (error) {
    console.log(error);
  });
