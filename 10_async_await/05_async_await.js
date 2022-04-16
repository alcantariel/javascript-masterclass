// Async/Await - iterando com async/await com for-await-of

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

    for await (let result of functions) {
      results.push(result);
    }

    const [a, b] = results;
    const result = await sum(a, b);

    console.log(result); // 12
  } catch (error) {
    console.log(error);
  }
})();
