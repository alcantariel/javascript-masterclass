// Async/Await - try/catch

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
    const a = await sum(2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
  } catch (error) {
    console.log(error); // Invalid input
  }
})();
