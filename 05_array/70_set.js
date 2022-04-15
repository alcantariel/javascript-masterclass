// Set - eliminar duplicação de um array na mão

let array = [10, 10, 10];
console.log(array); // [ 10, 10, 10 ]
console.log(array.length); // 3

const obj = {};
array.forEach((element) => {
  obj[element] = undefined;
});

console.log(obj); // { '10': undefined }

array = Object.keys(obj);
console.log(array); // [ "10" ];
console.log(array.length); // 1
