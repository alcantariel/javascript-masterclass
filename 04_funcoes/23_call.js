// call

const calculateArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const circle = {
  radius: 10,
  calculateArea,
};

console.log(calculateArea.call()); // NaN - this é undefined
console.log(calculateArea.call(circle)); // 314.1592653589793 - this é o circle
