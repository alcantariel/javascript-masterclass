// Generators - sincronizar chamadas assíncronas

function sum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

function asyncR(generator, result) {
  const iterator = generator.next(result);

  if (iterator.done) {
    return;
  }

  iterator.value.then((result) => asyncR(generator, result));
}

function async(fn) {
  const generator = fn();
  asyncR(generator);
}

async(function* () {
  const a = yield sum(2, 2); // 4
  const b = yield sum(4, 4); // 8
  const result = yield sum(a, b); // 12
  console.log(result);
});
