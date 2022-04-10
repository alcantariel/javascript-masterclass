// arguments

const sum = function () {
  let total = 0;

  for (let argument in arguments) {
    total += arguments[argument];
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5)); // 15
