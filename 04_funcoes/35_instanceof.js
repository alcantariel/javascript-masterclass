// criando o instanceof

const _instanceof = function (obj, constructorFn) {
  if (obj === constructorFn.prototype) {
    return true;
  }

  if (obj === null) {
    return false;
  }

  return _instanceof(obj.__proto__, constructorFn);
};

const date = new Date();

console.log(date instanceof Date); // true
console.log(date instanceof Object); // true
console.log(date instanceof Array); // false

console.log(_instanceof(date, Date)); // true
console.log(_instanceof(date, Object)); // true
console.log(_instanceof(date, Array)); // false
