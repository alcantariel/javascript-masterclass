// rest parameter

const sum = function (...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5)); // 15
