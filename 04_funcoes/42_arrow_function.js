// arrow function - arguments

const sum = () => {
  // imprime os arguments da função do módulo do node
  // logo, ele vai imprimir o arguments que existe fora da função
  console.log(arguments);

  let total = 0;

  for (let argument in arguments) {
    total += arguments[argument];
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5));

// 0[object Object]function require(path) {
//   return mod.require(path);
