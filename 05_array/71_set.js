// Set - eliminar duplicação de um array na mão

let array = [10, 10, 10];
console.log(array); // [ 10, 10, 10 ]
console.log(array.length); // 3

let set = [];

array.forEach((element) => {
  if (!set.includes(element)) {
    set.push(element);
  }
});

console.log(set); // [ 10 ]
console.log(set.length); // 1
