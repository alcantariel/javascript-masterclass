// tratamento exceções

function Rectangle(x, y) {
  this.x = x;
  this.y = y;
  this.calculateArea = function () {
    if (this.x > 0 && this.y > 0) {
      return this.x * this.y;
    } else {
      throw "Invalid value for x or y";
    }
  };
}

const rectangle = new Rectangle(10, 2);
const invalidRectangle = new Rectangle(-10, -2);

console.log(invalidRectangle.calculateArea()); // throw "Invalid value for x or y"
// interrompe o fluxo e nem executa o log abaixo
console.log(rectangle.calculateArea()); // 20
